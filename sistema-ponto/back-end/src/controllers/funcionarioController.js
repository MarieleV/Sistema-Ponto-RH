export async function criar(req, res) {
  const body = req.body;

  try {
    const [dup] = await pool.query('SELECT 1 FROM funcionario WHERE id_usuario=?', [body.id_usuario]);
    if (dup.length) return res.status(409).json({ message: 'Funcionário já vinculado a este usuário' });

    const sql = `
      INSERT INTO funcionario
        (id_usuario, nome_funcionario, email_funcionario, rg_funcionario, cpf_funcionario,
         rg_expedicao_func, telefone_funcionario, genero_funcionario, dt_nascimento,
         setor, funcao, cargo, status_funcionario)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;

    const params = [
      body.id_usuario,
      body.nome_funcionario,
      body.email_funcionario,
      body.rg_funcionario,
      body.cpf_funcionario,
      body.rg_expedicao_func,
      body.telefone_funcionario,
      body.genero_funcionario,
      body.dt_nascimento,
      body.setor,
      body.funcao || null,
      body.cargo || null,
      body.status_funcionario || 'Ativo'
    ];

    const [r] = await pool.query(sql, params);

    res.status(201).json({
      id_funcionario: r.insertId,
      ...body
    });

  } catch (e) {
    if (e.code === 'ER_DUP_ENTRY')
      return res.status(409).json({ message: 'Campos únicos duplicados (email/rg/cpf)' });

    return res.status(500).json({ message: 'Erro ao criar funcionário', erro: e.message });
  }
}
