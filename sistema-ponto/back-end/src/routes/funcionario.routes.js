const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionario.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Rotas protegidas — somente funcionarios autenticados
router.get("/", authMiddleware, funcionarioController.getAllFuncionarios);
router.get("/:id", authMiddleware, funcionarioController.getFuncionarioById);
router.post("/", authMiddleware, funcionarioController.createFuncionario);
router.put("/:id", authMiddleware, funcionarioController.updateFuncionario);
router.delete("/:id", authMiddleware, funcionarioController.deleteFuncionario);

module.exports = router;
