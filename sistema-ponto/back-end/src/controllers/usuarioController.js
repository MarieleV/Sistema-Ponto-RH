import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/password.js';


export async function login(req, res) {
const { email, senha } = req.body;
const [rows] = await pool.query('SELECT * FROM usuario WHERE email = ?', [email]);
const user = rows[0];
if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });
const ok = await comparePassword(senha, user.senha);
if (!ok) return res.status(401).json({ message: 'Credenciais inválidas' });


const token = jwt.sign({
id_usuario: user.id_usuario,
email: user.email,
tipo_usuario: user.tipo_usuario
}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '8h' });


res.json({ token, user: { id_usuario: user.id_usuario, email: user.email, tipo_usuario: user.tipo_usuario } });
}


// Apenas Admin cria usuário + perfil vinculado
export async function createUsuario(req, res) {
const { email, senha, tipo_usuario } = req.body;
const hashed = await hashPassword(senha);
try {
const conn = await pool.getConnection();
try {
await conn.beginTransaction();
const [u] = await conn.query(
'INSERT INTO usuario (email, senha, tipo_usuario) VALUES (?, ?, ?)',
[email, hashed, tipo_usuario]
);
const id_usuario = u.insertId;
await conn.commit();
res.status(201).json({ id_usuario, email, tipo_usuario });
} catch (e) {
await conn.rollback();
if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ message: 'Email já cadastrado' });
throw e;
} finally {
conn.release();
}
} catch (e) {
res.status(500).json({ message: 'Erro ao criar usuário' });
}
}