// src/controllers/administrador.controller.js
const db = require('../config/database');
const bcrypt = require('bcrypt');

// LISTAR TODOS (com email do usuário)
exports.getAllAdministradores = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT a.id_administrador, a.nome_administrador, u.id_usuario, u.email
      FROM administrador a
      JOIN usuario u ON a.id_usuario = u.id_usuario
      ORDER BY a.id_administrador
    `);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar administradores:', err);
    return res.status(500).json({ message: 'Erro ao listar administradores.' });
  }
};

// GET POR ID
exports.getAdministradorById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(`
      SELECT a.id_administrador, a.nome_administrador, u.id_usuario, u.email
      FROM administrador a
      JOIN usuario u ON a.id_usuario = u.id_usuario
      WHERE a.id_administrador = ?
    `, [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Administrador não encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    console.error('Erro ao buscar administrador:', err);
    return res.status(500).json({ message: 'Erro ao buscar administrador.' });
  }
};

// CRIAR (cria usuario + admin) — transação usada
exports.createAdministrador = async (req, res) => {
  const connection = await db.getConnection();
  try {
    const { nome_administrador, email, senha } = req.body;
    if (!nome_administrador || !email || !senha) {
      connection.release();
      return res.status(400).json({ message: 'Dados obrigatórios ausentes.' });
    }

    await connection.beginTransaction();

    const [exists] = await connection.query('SELECT id_usuario FROM usuario WHERE email = ?', [email]);
    if (exists.length > 0) {
      await connection.rollback();
      connection.release();
      return res.status(409).json({ message: 'E-mail já cadastrado.' });
    }

    const hash = await bcrypt.hash(senha, 10);
    const [resUser] = await connection.query('INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?)', [email, hash, 'Administrador']);
    const id_usuario = resUser.insertId;

    await connection.query('INSERT INTO administrador (id_usuario, nome_administrador) VALUES (?, ?)', [id_usuario, nome_administrador]);

    await connection.commit();
    connection.release();
    return res.status(201).json({ message: 'Administrador criado.', id_usuario });
  } catch (err) {
    await connection.rollback();
    connection.release();
    console.error('Erro ao criar administrador:', err);
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Registro duplicado.' });
    return res.status(500).json({ message: 'Erro ao criar administrador.' });
  }
};

// ATUALIZAR (nome do admin e/ou dados do usuario relacionado)
exports.updateAdministrador = async (req, res) => {
  try {
    const { id } = req.params; // id_administrador
    const { nome_administrador, email, senha } = req.body;

    const [rows] = await db.query('SELECT * FROM administrador WHERE id_administrador = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Administrador não encontrado.' });
    const admin = rows[0];

    if (nome_administrador) {
      await db.query('UPDATE administrador SET nome_administrador = ? WHERE id_administrador = ?', [nome_administrador, id]);
    }

    if (email || senha) {
      const [userRows] = await db.query('SELECT * FROM usuario WHERE id_usuario = ?', [admin.id_usuario]);
      if (userRows.length > 0) {
        const user = userRows[0];
        const newEmail = email || user.email;
        const newSenha = senha ? await bcrypt.hash(senha, 10) : user.senha;
        await db.query('UPDATE usuario SET email = ?, senha = ? WHERE id_usuario = ?', [newEmail, newSenha, user.id_usuario]);
      }
    }

    return res.json({ message: 'Administrador atualizado.' });
  } catch (err) {
    console.error('Erro ao atualizar administrador:', err);
    return res.status(500).json({ message: 'Erro ao atualizar administrador.' });
  }
};

// DELETAR ADMINISTRADOR
exports.deleteAdministrador = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM administrador WHERE id_administrador = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Administrador não encontrado.' });
    return res.json({ message: 'Administrador removido com sucesso.' });
  } catch (err) {
    console.error('Erro ao remover administrador:', err);
    return res.status(500).json({ message: 'Erro ao remover administrador.' });
  }
};
