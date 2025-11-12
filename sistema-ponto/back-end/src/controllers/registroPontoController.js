import { db } from "../config/db.js";

export const registrarPonto = async (req, res) => {
  const { id_funcionario, entrada, saida } = req.body;
  const hoje = new Date().toISOString().split("T")[0];

  const [row] = await db.query(
    "SELECT * FROM registro_ponto WHERE id_funcionario = ? AND data_registro = ?",
    [id_funcionario, hoje]
  );

  if (row.length === 0) {
    await db.query(
      "INSERT INTO registro_ponto (id_funcionario, data_registro, entrada1) VALUES (?, ?, ?)",
      [id_funcionario, hoje, entrada]
    );
  } else {
    await db.query(
      "UPDATE registro_ponto SET saida1 = ? WHERE id_registro = ?",
      [saida, row[0].id_registro]
    );
  }

  res.json({ sucesso: true });
};
