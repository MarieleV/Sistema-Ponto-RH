import express from "express";
import { login } from "../controllers/usuarioController.js";
import { listarFuncionarios, criarFuncionario } from "../controllers/funcionarioController.js";
import { registrarPonto } from "../controllers/registroPontoController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

// Login
router.post("/login", login);

// Funcionário
router.get("/funcionarios", auth("Administrador"), listarFuncionarios);
router.post("/funcionarios", auth("Administrador"), criarFuncionario);

// Registro de ponto
router.post("/registrar", auth("Funcionario"), registrarPonto);

export default router;
