const express = require("express");
const router = express.Router();
const administradorController = require("../controllers/administrador.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Rotas protegidas — somente administradores
router.get("/", authMiddleware, administradorController.getAllAdministradores);
router.get("/:id", authMiddleware, administradorController.getAdministradorById);
router.post("/", authMiddleware, administradorController.createAdministrador);
router.put("/:id", authMiddleware, administradorController.updateAdministrador);
router.delete("/:id", authMiddleware, administradorController.deleteAdministrador);

module.exports = router;
