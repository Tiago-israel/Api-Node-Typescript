import express from 'express'
import account from '../controllers/account'
const routes = express.Router()

routes.use('/account', account)

export default routes
