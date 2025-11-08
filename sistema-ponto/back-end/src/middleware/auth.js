import jwt from 'jsonwebtoken';


export function authRequired(req, res, next) {
const header = req.headers.authorization || '';
const token = header.startsWith('Bearer ') ? header.slice(7) : null;
if (!token) return res.status(401).json({ message: 'Token ausente' });
try {
const payload = jwt.verify(token, process.env.JWT_SECRET);
req.user = payload; // { id_usuario, email, tipo_usuario }
return next();
} catch {
return res.status(401).json({ message: 'Token inválido' });
}
}


export function authorize(...tiposPermitidos) {
return (req, res, next) => {
if (!req.user) return res.status(401).json({ message: 'Não autenticado' });
if (!tiposPermitidos.includes(req.user.tipo_usuario)) {
return res.status(403).json({ message: 'Acesso negado' });
}
next();
};
}