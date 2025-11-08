import { body } from 'express-validator';


export const createFuncionarioValidator = [
body('nome_funcionario').notEmpty(),
body('email_funcionario').isEmail(),
body('rg_funcionario').notEmpty(),
body('cpf_funcionario').isLength({ min: 11, max: 11 }),
body('rg_expedicao_func').notEmpty(),
body('telefone_funcionario').notEmpty(),
body('genero_funcionario').isIn(['Masculino', 'Feminino']),
body('dt_nascimento').isISO8601(),
body('setor').notEmpty()
];