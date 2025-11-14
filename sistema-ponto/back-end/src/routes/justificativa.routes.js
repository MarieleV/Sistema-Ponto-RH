const express = require('express');
const router = express.Router();

const {
  getAllJustificativas,
  getJustificativasByFuncionario,
  criarJustificativa,
  atualizarStatus,
  deletarJustificativa
} = require('../controllers/justificativa.controller');

const authMiddleware = require('../middlewares/auth.middleware');

// Middleware obrigatório para todas as rotas
router.use(authMiddleware);

// LISTAR TODAS AS JUSTIFICATIVAS (ADMIN/RH)
router.get('/', getAllJustificativas);

// LISTAR JUSTIFICATIVAS DE UM FUNCIONÁRIO
router.get('/funcionario/:id_funcionario', getJustificativasByFuncionario);

// CRIAR NOVA JUSTIFICATIVA (FUNCIONÁRIO)
router.post('/', criarJustificativa);

// ATUALIZAR STATUS (ACEITAR / NEGAR) - ADMIN
router.put('/:id_justificativa/status', atualizarStatus);

// DELETAR JUSTIFICATIVA (opcional) - ADMIN
router.delete('/:id', deletarJustificativa);

module.exports = router;
