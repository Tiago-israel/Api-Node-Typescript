import express from 'express'
import cors from 'cors'
import routes from './api/routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(routes)

app.listen(3000, () => console.log('server listem on port 3000'))
