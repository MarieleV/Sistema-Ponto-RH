// src/controllers/funcionario.controller.js
const db = require('../config/database');
const bcrypt = require('bcrypt');

// LISTAR TODOS
exports.getAllFuncionarios = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT f.id_funcionario, f.nome_funcionario, u.id_usuario, u.email, f.cargo, f.setor, f.status_funcionario
      FROM funcionario f
      JOIN usuario u ON f.id_usuario = u.id_usuario
      ORDER BY f.nome_funcionario
    `);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar funcionários:', err);
    return res.status(500).json({ message: 'Erro ao listar funcionários.' });
  }
};

// GET POR ID (id_funcionario)
exports.getFuncionarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(`
      SELECT f.*, u.email
      FROM funcionario f
      JOIN usuario u ON f.id_usuario = u.id_usuario
      WHERE f.id_funcionario = ?
    `, [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Funcionário não encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    console.error('Erro ao buscar funcionário:', err);
    return res.status(500).json({ message: 'Erro ao buscar funcionário.' });
  }
};

// CRIAR FUNCIONÁRIO (usuario + funcionario) — usa transação
exports.createFuncionario = async (req, res) => {
  const connection = await db.getConnection();
  try {
    const {
      nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func,
      telefone_funcionario, genero_funcionario, dt_nascimento, setor, funcao, cargo,
      email, senha
    } = req.body;

    if (!nome_funcionario || !email || !senha || !cpf_funcionario) {
      connection.release();
      return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
    }

    await connection.beginTransaction();

    const [existingEmail] = await connection.query('SELECT id_usuario FROM usuario WHERE email = ?', [email]);
    if (existingEmail.length > 0) {
      await connection.rollback();
      connection.release();
      return res.status(409).json({ message: 'E-mail já cadastrado.' });
    }

    const [existingCpf] = await connection.query('SELECT id_funcionario FROM funcionario WHERE cpf_funcionario = ?', [cpf_funcionario]);
    if (existingCpf.length > 0) {
      await connection.rollback();
      connection.release();
      return res.status(409).json({ message: 'CPF já cadastrado.' });
    }

    const hash = await bcrypt.hash(senha, 10);
    const [rUser] = await connection.query('INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?)', [email, hash, 'Funcionario']);
    const id_usuario = rUser.insertId;

    await connection.query(
      `INSERT INTO funcionario (
         id_usuario, nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func,
         telefone_funcionario, genero_funcionario, dt_nascimento, setor, funcao, cargo
       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id_usuario, nome_funcionario, rg_funcionario || null, cpf_funcionario, rg_expedicao_func || null,
       telefone_funcionario || null, genero_funcionario || 'Outro', dt_nascimento || null, setor || 'Geral', funcao || null, cargo || null]
    );

    await connection.commit();
    connection.release();
    return res.status(201).json({ message: 'Funcionário criado com sucesso.', id_usuario });
  } catch (err) {
    await connection.rollback();
    connection.release();
    console.error('Erro ao criar funcionário:', err);
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Registro duplicado.' });
    return res.status(500).json({ message: 'Erro ao criar funcionário.' });
  }
};

// ATUALIZAR FUNCIONÁRIO
exports.updateFuncionario = async (req, res) => {
  try {
    const { id } = req.params; // id_funcionario
    const {
      nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func,
      telefone_funcionario, genero_funcionario, dt_nascimento, setor, funcao, cargo, email, senha
    } = req.body;

    const [rows] = await db.query('SELECT * FROM funcionario WHERE id_funcionario = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Funcionário não encontrado.' });
    const func = rows[0];

    await db.query(
      `UPDATE funcionario SET
         nome_funcionario = ?, rg_funcionario = ?, cpf_funcionario = ?, rg_expedicao_func = ?,
         telefone_funcionario = ?, genero_funcionario = ?, dt_nascimento = ?, setor = ?, funcao = ?, cargo = ?
       WHERE id_funcionario = ?`,
      [
        nome_funcionario || func.nome_funcionario,
        rg_funcionario || func.rg_funcionario,
        cpf_funcionario || func.cpf_funcionario,
        rg_expedicao_func || func.rg_expedicao_func,
        telefone_funcionario || func.telefone_funcionario,
        genero_funcionario || func.genero_funcionario,
        dt_nascimento || func.dt_nascimento,
        setor || func.setor,
        funcao || func.funcao,
        cargo || func.cargo,
        id
      ]
    );

    // Atualiza email/senha se fornecido
    if (email || senha) {
      const [userRows] = await db.query('SELECT * FROM usuario WHERE id_usuario = ?', [func.id_usuario]);
      if (userRows.length > 0) {
        const user = userRows[0];
        const newEmail = email || user.email;
        const newSenha = senha ? await bcrypt.hash(senha, 10) : user.senha;
        await db.query('UPDATE usuario SET email = ?, senha = ? WHERE id_usuario = ?', [newEmail, newSenha, user.id_usuario]);
      }
    }

    return res.json({ message: 'Funcionário atualizado com sucesso.' });
  } catch (err) {
    console.error('Erro ao atualizar funcionário:', err);
    return res.status(500).json({ message: 'Erro ao atualizar funcionário.' });
  }
};

// DELETAR FUNCIONÁRIO
exports.deleteFuncionario = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM funcionario WHERE id_funcionario = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Funcionário não encontrado.' });
    return res.json({ message: 'Funcionário excluído com sucesso.' });
  } catch (err) {
    console.error('Erro ao excluir funcionário:', err);
    return res.status(500).json({ message: 'Erro ao excluir funcionário.' });
  }
};
