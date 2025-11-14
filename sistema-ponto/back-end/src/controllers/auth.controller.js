// src/controllers/auth.controller.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'troque_essa_chave';
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || '8h';

// Registrar usuário (cria apenas na tabela usuario, ou cria também admin/func se dados extras enviados)
exports.registrarUsuario = async (req, res) => {
  const {
    email, senha, tipo_usuario,
    nome_administrador, // opcional
    nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func, telefone_funcionario,
    genero_funcionario, dt_nascimento, setor, funcao, cargo
  } = req.body;

  if (!email || !senha || !tipo_usuario) return res.status(400).json({ message: 'Dados obrigatórios ausentes.' });
  if (!['Funcionario', 'Administrador'].includes(tipo_usuario)) return res.status(400).json({ message: 'tipo_usuario inválido.' });

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // verifica email
    const [exists] = await connection.query('SELECT id_usuario FROM usuario WHERE email = ?', [email]);
    if (exists.length > 0) {
      await connection.rollback();
      connection.release();
      return res.status(409).json({ message: 'E-mail já cadastrado.' });
    }

    const hash = await bcrypt.hash(senha, 10);
    const [rUser] = await connection.query('INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?)', [email, hash, tipo_usuario]);
    const id_usuario = rUser.insertId;

    if (tipo_usuario === 'Administrador') {
      if (!nome_administrador) {
        // ainda assim cria usuario, mas avisa que falta nome_administrador
        await connection.query('INSERT INTO administrador (id_usuario, nome_administrador) VALUES (?, ?)', [id_usuario, nome_administrador || 'Administrador']);
      } else {
        await connection.query('INSERT INTO administrador (id_usuario, nome_administrador) VALUES (?, ?)', [id_usuario, nome_administrador]);
      }
    }

    if (tipo_usuario === 'Funcionario') {
      // campos obrigatórios no seu schema: nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func, telefone, genero, dt_nascimento, setor
      // se não fornecer todos, eu insiro valores placeholders (ideal: envio completo do front)
      await connection.query(
        `INSERT INTO funcionario (
          id_usuario, nome_funcionario, rg_funcionario, cpf_funcionario, rg_expedicao_func,
          telefone_funcionario, genero_funcionario, dt_nascimento, setor, funcao, cargo
         ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id_usuario,
          nome_funcionario || 'Sem Nome',
          rg_funcionario || null,
          cpf_funcionario || null,
          rg_expedicao_func || null,
          telefone_funcionario || null,
          genero_funcionario || 'Outro',
          dt_nascimento || null,
          setor || 'Geral',
          funcao || null,
          cargo || null
        ]
      );
    }

    await connection.commit();
    connection.release();

    return res.status(201).json({ message: 'Usuário criado com sucesso.', id_usuario });
  } catch (err) {
    await connection.rollback();
    connection.release();
    console.error('Erro ao registrar usuário:', err);
    // Erros de constraint: DUP, FK, etc.
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Registro duplicado.' });
    return res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
};

// Login
exports.loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) return res.status(400).json({ message: 'Dados incompletos.' });

    const [rows] = await db.query('SELECT id_usuario, email, senha, tipo_usuario FROM usuario WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(401).json({ message: 'Credenciais inválidas.' });

    const user = rows[0];
    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) return res.status(401).json({ message: 'Credenciais inválidas.' });

    const token = jwt.sign({ id_usuario: user.id_usuario, tipo_usuario: user.tipo_usuario, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
    return res.json({ token });
  } catch (err) {
    console.error('Erro no login:', err);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};

// Retorna dados do usuário logado (a partir do token)
exports.getUsuarioLogado = async (req, res) => {
  try {
    // req.user é preenchido pelo auth.middleware
    if (!req.user) return res.status(401).json({ message: 'Usuário não autenticado.' });
    const { id_usuario } = req.user;
    const [rows] = await db.query('SELECT id_usuario, email, tipo_usuario FROM usuario WHERE id_usuario = ?', [id_usuario]);
    if (rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    console.error('Erro ao obter usuário logado:', err);
    return res.status(500).json({ message: 'Erro no servidor.' });
  }
};
