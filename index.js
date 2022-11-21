const express = require('express')
const routerApi = require('./app/routes')
const { errorHandler, logErrors } = require('./app/middlewares/error-handler')

const app = express()
const PORT = 3000

app.use(express.json()) // Middleware para recibir info tipo json

routerApi(app)

// Se debe utilizar acá, se ejecutan en ese orden
app.use(logErrors)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})
