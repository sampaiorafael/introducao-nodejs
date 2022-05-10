import * as dotenv from 'dotenv'
import express from 'express'
import { status } from './status'
dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

const app = express()

app.get('/status', (req, res) => {
  const serverStatus = status()
  res.send(serverStatus)
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})