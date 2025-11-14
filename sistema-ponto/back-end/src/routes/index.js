const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const usuarioRoutes = require("./usuario.routes");
const administradorRoutes = require("./administrador.routes");
const funcionarioRoutes = require("./funcionario.routes");
const registroRoutes = require("./registro.routes");
const justificativaRoutes = require("./justificativa.routes");

router.use("/auth", authRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/administradores", administradorRoutes);
router.use("/funcionarios", funcionarioRoutes);
router.use("/registros", registroRoutes);
router.use("/justificativas", justificativaRoutes);

module.exports = router;
