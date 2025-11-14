require("dotenv").config();
const app = require("./app");
const db = require("./config/database"); // o POOL

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Testa conexão com MySQL usando Pool
    const connection = await db.getConnection();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    connection.release();

    // Sobe servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}

startServer();
