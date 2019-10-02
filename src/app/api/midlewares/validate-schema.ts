import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
export default (req:Request, res:Response, next) => {
  const errors = validationResult(req)
  return errors.isEmpty() ? next() : res.status(400).send(errors)
}
