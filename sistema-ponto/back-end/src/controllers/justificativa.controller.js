// src/controllers/justificativa.controller.js
const db = require('../config/database');

// LISTAR TODAS
exports.getAllJustificativas = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        j.id_justificativa,
        f.id_funcionario,
        f.nome_funcionario,
        r.id_registro,
        r.data_registro,
        j.motivo_justificativa,
        j.hora_correta,
        j.justificativa_escrita,
        j.anexo_justificativa1,
        j.anexo_justificativa2,
        j.status_analise,
        j.data_justificativa,
        j.id_administrador
      FROM justificativa j
      JOIN registro_ponto r ON j.id_registro = r.id_registro
      JOIN funcionario f ON r.id_funcionario = f.id_funcionario
      ORDER BY j.data_justificativa DESC
    `);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar justificativas:', err);
    return res.status(500).json({ message: 'Erro ao listar justificativas.' });
  }
};

// LISTAR POR FUNCIONÁRIO
exports.getJustificativasByFuncionario = async (req, res) => {
  try {
    const { id_funcionario } = req.params;
    const [rows] = await db.query(`
      SELECT j.id_justificativa, r.data_registro, j.motivo_justificativa, j.hora_correta,
             j.justificativa_escrita, j.status_analise, j.data_justificativa
      FROM justificativa j
      JOIN registro_ponto r ON j.id_registro = r.id_registro
      WHERE r.id_funcionario = ?
      ORDER BY j.data_justificativa DESC
    `, [id_funcionario]);
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar justificativas do funcionário:', err);
    return res.status(500).json({ message: 'Erro ao buscar justificativas do funcionário.' });
  }
};

// CRIAR JUSTIFICATIVA
exports.criarJustificativa = async (req, res) => {
  try {
    const { id_registro, motivo_justificativa, hora_correta, justificativa_escrita, anexo_justificativa1, anexo_justificativa2 } = req.body;
    if (!id_registro || !motivo_justificativa) return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });

    await db.query(`
      INSERT INTO justificativa (
        id_registro, motivo_justificativa, hora_correta, justificativa_escrita, anexo_justificativa1, anexo_justificativa2, status_analise
      ) VALUES (?, ?, ?, ?, ?, ?, 'Aguardando Retorno')
    `, [id_registro, motivo_justificativa, hora_correta || null, justificativa_escrita || null, anexo_justificativa1 || null, anexo_justificativa2 || null]);

    return res.status(201).json({ message: 'Justificativa criada com sucesso.' });
  } catch (err) {
    console.error('Erro ao criar justificativa:', err);
    if (err && err.code === 'ER_NO_REFERENCED_ROW_2') return res.status(400).json({ message: 'Registro de ponto inválido.' });
    return res.status(500).json({ message: 'Erro ao criar justificativa.' });
  }
};

// ATUALIZAR STATUS (aceitar/neg)
exports.atualizarStatus = async (req, res) => {
  try {
    const { id_justificativa } = req.params;
    const { status_analise, id_administrador } = req.body;
    if (!['Aceito','Negado'].includes(status_analise)) return res.status(400).json({ message: 'Status inválido.' });

    await db.query('UPDATE justificativa SET status_analise = ?, id_administrador = ? WHERE id_justificativa = ?', [status_analise, id_administrador || null, id_justificativa]);
    return res.json({ message: `Justificativa ${status_analise.toLowerCase()} com sucesso.` });
  } catch (err) {
    console.error('Erro ao atualizar status:', err);
    return res.status(500).json({ message: 'Erro ao atualizar status da justificativa.' });
  }
};

// DELETAR
exports.deletarJustificativa = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM justificativa WHERE id_justificativa = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Justificativa não encontrada.' });
    return res.json({ message: 'Justificativa excluída.' });
  } catch (err) {
    console.error('Erro ao excluir justificativa:', err);
    return res.status(500).json({ message: 'Erro ao excluir justificativa.' });
  }
};
