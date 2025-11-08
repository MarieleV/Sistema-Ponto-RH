import { body } from 'express-validator';


export const marcarPontoValidator = [
body('momento').isIn(['entrada1','saida1','entrada2','saida2','entrada3','saida3','entrada4','saida4'])
];