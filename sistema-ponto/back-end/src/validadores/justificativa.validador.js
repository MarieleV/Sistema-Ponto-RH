import { body } from 'express-validator';


export const criarJustificativaValidator = [
body('id_registro').isInt({ min: 1 }),
body('motivo_justificativa').isIn(['Esquecimento','Consulta','Atestado','Outro']),
body('hora_correta').optional({ nullable: true }).matches(/^\d{2}:\d{2}(:\d{2})?$/)
];