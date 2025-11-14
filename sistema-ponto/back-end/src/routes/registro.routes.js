const express = require('express');
const router = express.Router();

const {
  registrarBatida,
  listarRegistrosFuncionario,
  listarTodosRegistros,
  atualizarRegistroManual,
  deletarRegistro
} = require('../controllers/registro.controller');

const authMiddleware = require('../middlewares/auth.middleware');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

// REGISTRAR BATIDA
router.post('/bater', registrarBatida);

// LISTAR REGISTROS DE UM FUNCIONÁRIO
router.get('/funcionario/:id_funcionario', listarRegistrosFuncionario);

// LISTAR TODOS OS REGISTROS
router.get('/', listarTodosRegistros);

// AJUSTE MANUAL
router.put('/ajustar', atualizarRegistroManual);

// DELETAR REGISTRO
router.delete('/:id_registro', deletarRegistro);

module.exports = router;
