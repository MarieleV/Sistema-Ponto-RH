const express = require('express');
const router = express.Router();

const {
  registrarUsuario,
  loginUsuario,
  getUsuarioLogado
} = require('../controllers/auth.controller');

const authMiddleware = require('../middlewares/auth.middleware');

// =====================================================================
// REGISTRAR USUÁRIO (Administrador cria usuário novo)
// =====================================================================
router.post('/register', registrarUsuario);

// =====================================================================
// LOGIN DO USUÁRIO (gera token JWT)
// =====================================================================
router.post('/login', loginUsuario);

// =====================================================================
// PEGAR DADOS DO USUÁRIO LOGADO
// (rota protegida com middleware)
// =====================================================================
router.get('/me', authMiddleware, getUsuarioLogado);

module.exports = router;
