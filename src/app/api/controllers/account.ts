import express, { Request, Response } from 'express'
import * as accountService from '../../services/account'
import validateSchema from '../midlewares/validate-schema'
import userValidator from '../validations/create-user-validator'

const router = express.Router()

router.post('/register', userValidator, validateSchema, async (req: Request, res:Response) => {
  const usuario = req.body
  await accountService.create(usuario)
  res.send({
    success: true
  })
})

export default router
