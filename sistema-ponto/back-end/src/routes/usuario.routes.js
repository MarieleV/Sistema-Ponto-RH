const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Rotas protegidas — somente usuários autenticados podem acessar
router.get("/", authMiddleware, usuarioController.getAllUsuarios);
router.get("/:id", authMiddleware, usuarioController.getUsuarioById);
router.post("/", authMiddleware, usuarioController.createUsuario);
router.put("/:id", authMiddleware, usuarioController.updateUsuario);
router.delete("/:id", authMiddleware, usuarioController.deleteUsuario);

module.exports = router;
