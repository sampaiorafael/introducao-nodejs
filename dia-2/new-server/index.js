require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const express = require('express')
const app = express()

app.get('/status', (req, res) => {
  res.send('Servidor online')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})