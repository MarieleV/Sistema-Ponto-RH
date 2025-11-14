// src/controllers/usuario.controller.js
const db = require('../config/database');
const bcrypt = require('bcrypt');

// LISTAR USUÁRIOS
exports.getAllUsuarios = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id_usuario, email, tipo_usuario FROM usuario');
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    return res.status(500).json({ message: 'Erro ao listar usuários.' });
  }
};

// GET POR ID
exports.getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT id_usuario, email, tipo_usuario FROM usuario WHERE id_usuario = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado.' });
    return res.json(rows[0]);
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return res.status(500).json({ message: 'Erro ao buscar usuário.' });
  }
};

// CRIAR USUÁRIO (apenas tabela usuario)
exports.createUsuario = async (req, res) => {
  try {
    const { email, senha, tipo_usuario } = req.body;
    if (!email || !senha || !tipo_usuario) return res.status(400).json({ message: 'Dados incompletos.' });
    if (!['Funcionario', 'Administrador'].includes(tipo_usuario)) return res.status(400).json({ message: 'tipo_usuario inválido.' });

    const [exists] = await db.query('SELECT id_usuario FROM usuario WHERE email = ?', [email]);
    if (exists.length > 0) return res.status(409).json({ message: 'E-mail já cadastrado.' });

    const hash = await bcrypt.hash(senha, 10);
    const [result] = await db.query('INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?)', [email, hash, tipo_usuario]);
    return res.status(201).json({ message: 'Usuário criado.', id_usuario: result.insertId });
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    if (err && err.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Registro duplicado.' });
    return res.status(500).json({ message: 'Erro ao criar usuário.' });
  }
};

// ATUALIZAR USUÁRIO
exports.updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, senha, tipo_usuario } = req.body;

    const [rows] = await db.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Usuário não encontrado.' });

    const user = rows[0];
    const newEmail = email || user.email;
    const newSenha = senha ? await bcrypt.hash(senha, 10) : user.senha;
    const newTipo = tipo_usuario || user.tipo_usuario;

    await db.query('UPDATE usuario SET email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ?', [newEmail, newSenha, newTipo, id]);
    return res.json({ message: 'Usuário atualizado.' });
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    return res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
};

// DELETAR USUÁRIO
exports.deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM usuario WHERE id_usuario = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Usuário não encontrado.' });
    return res.json({ message: 'Usuário excluído.' });
  } catch (err) {
    console.error('Erro ao excluir usuário:', err);
    return res.status(500).json({ message: 'Erro ao excluir usuário.' });
  }
};
