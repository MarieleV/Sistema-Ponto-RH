const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // importa index.js de routes

const app = express();

app.use(cors());
app.use(express.json());

// Rotas principais
app.use("/api", routes);

// Rota básica de status
app.get("/", (req, res) => {
    res.json({ mensagem: "API do Sistema de Ponto funcionando!" });
});

module.exports = app;
