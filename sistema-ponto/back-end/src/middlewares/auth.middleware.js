const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'troque_essa_chave';

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'Token não fornecido.' });

  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // anexa dados do usuário ao req para uso posterior
    req.user = { id_usuario: payload.id_usuario, tipo_usuario: payload.tipo_usuario, email: payload.email };
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
