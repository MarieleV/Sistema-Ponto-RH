import { body } from 'express-validator';


export const loginValidator = [
body('email').isEmail().withMessage('Email inválido'),
body('senha').isString().isLength({ min: 6 }).withMessage('Senha inválida')
];


export const createUsuarioValidator = [
body('email').isEmail(),
body('senha').isString().isLength({ min: 6 }),
body('tipo_usuario').isIn(['Funcionario', 'Administrador'])
];