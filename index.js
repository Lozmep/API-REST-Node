const express = require('express')
const routerApi = require('./app/routes')

const app = express()
const PORT = 3000

app.use(express.json()) // Middleware para recibir info tipo json

routerApi(app)

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})
