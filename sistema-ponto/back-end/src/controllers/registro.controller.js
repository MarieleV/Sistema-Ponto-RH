// src/controllers/registro.controller.js
const db = require('../config/database');

// LISTAR TODOS
exports.listarTodosRegistros = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT r.id_registro, f.id_funcionario, f.nome_funcionario, r.data_registro,
             r.entrada1, r.saida1, r.entrada2, r.saida2,
             r.entrada3, r.saida3, r.entrada4, r.saida4,
             r.saldo_trabalhado, r.status_registro
      FROM registro_ponto r
      JOIN funcionario f ON r.id_funcionario = f.id_funcionario
      ORDER BY r.data_registro DESC
    `);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar registros:', err);
    return res.status(500).json({ message: 'Erro ao listar registros.' });
  }
};

// LISTAR POR FUNCIONÁRIO
exports.listarRegistrosFuncionario = async (req, res) => {
  try {
    const { id_funcionario } = req.params;
    const [rows] = await db.query('SELECT * FROM registro_ponto WHERE id_funcionario = ? ORDER BY data_registro DESC', [id_funcionario]);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar registros do funcionário:', err);
    return res.status(500).json({ message: 'Erro ao buscar registros do funcionário.' });
  }
};

// REGISTRAR BATIDA
exports.registrarBatida = async (req, res) => {
  try {
    const { id_funcionario, tipo } = req.body;
    if (!id_funcionario || !tipo) return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });

    const hoje = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const hora = new Date().toTimeString().split(' ')[0]; // HH:MM:SS

    const [existente] = await db.query('SELECT * FROM registro_ponto WHERE id_funcionario = ? AND data_registro = ?', [id_funcionario, hoje]);

    if (existente.length === 0) {
      // cria novo registro
      let coluna = null;
      if (tipo === 'entrada') coluna = 'entrada1';
      else if (tipo === 'saida') coluna = 'saida1';
      else return res.status(400).json({ message: 'Tipo inválido. Use "entrada" ou "saida".' });

      const sql = `INSERT INTO registro_ponto (id_funcionario, data_registro, ${coluna}, status_registro) VALUES (?, ?, ?, 'Incompleto')`;
      await db.query(sql, [id_funcionario, hoje, hora]);
      return res.status(201).json({ message: 'Registro criado.' });
    }

    const registro = existente[0];
    const colunas = ['entrada1','saida1','entrada2','saida2','entrada3','saida3','entrada4','saida4'];
    const colunaLivre = colunas.find(c => registro[c] === null);

    if (!colunaLivre) return res.status(400).json({ message: 'Limite de batidas diárias atingido.' });

    await db.query(`UPDATE registro_ponto SET ${colunaLivre} = ?, status_registro = 'Incompleto' WHERE id_registro = ?`, [hora, registro.id_registro]);
    return res.json({ message: `Batida registrada em ${colunaLivre}.` });
  } catch (err) {
    console.error('Erro ao registrar batida:', err);
    return res.status(500).json({ message: 'Erro ao registrar batida.' });
  }
};

// AJUSTAR REGISTRO
exports.atualizarRegistroManual = async (req, res) => {
  try {
    const { id_registro, campo, novo_horario } = req.body;
    if (!id_registro || !campo || !novo_horario) return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });

    const colunasValidas = ['entrada1','saida1','entrada2','saida2','entrada3','saida3','entrada4','saida4'];
    if (!colunasValidas.includes(campo)) return res.status(400).json({ message: 'Campo inválido.' });

    const [rows] = await db.query('SELECT * FROM registro_ponto WHERE id_registro = ?', [id_registro]);
    if (rows.length === 0) return res.status(404).json({ message: 'Registro não encontrado.' });

    await db.query(`UPDATE registro_ponto SET ${campo} = ?, status_registro = 'OK' WHERE id_registro = ?`, [novo_horario, id_registro]);
    return res.json({ message: 'Registro ajustado com sucesso.' });
  } catch (err) {
    console.error('Erro ao ajustar registro:', err);
    return res.status(500).json({ message: 'Erro ao ajustar registro.' });
  }
};

// DELETAR REGISTRO
exports.deletarRegistro = async (req, res) => {
  try {
    const { id_registro } = req.params;
    const [result] = await db.query('DELETE FROM registro_ponto WHERE id_registro = ?', [id_registro]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
    return res.json({ message: 'Registro excluído.' });
  } catch (err) {
    console.error('Erro ao excluir registro:', err);
    return res.status(500).json({ message: 'Erro ao excluir registro.' });
  }
};
