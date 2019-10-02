
import { check } from 'express-validator'

export default [
  check('name')
    .not().isEmpty().trim()
    .withMessage('Name obrigatório'),
  check('email')
    .not().isEmpty().trim()
    .withMessage('Email obrigatório')
    .isEmail()
    .withMessage('Email inválido'),
  check('password')
    .not().isEmpty().trim()
    .withMessage('Senha obrigatória')
]
