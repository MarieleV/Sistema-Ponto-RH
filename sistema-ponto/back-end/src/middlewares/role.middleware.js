module.exports = (requiredRole) => {
    return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Usuário não autenticado.' });
    if (req.user.tipo_usuario !== requiredRole) return res.status(403).json({ message: 'Acesso negado.' });
    next();
    };
};
// uso para rotas administrador