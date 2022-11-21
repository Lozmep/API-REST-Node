const express = require('express')
const routerApi = require('./app/routes')
const cors = require('cors')
const { errorHandler, logErrors } = require('./app/middlewares/error-handler')

const app = express()
const PORT = 3000

const whitelist = ['http://localhost:8080', 'https://myapp.com.co'] //Para validar origenes esppecificos
const options = {
  origin: (origin, cb) => {
    if (whitelist.includes(origin)) {
      cb(null, true)
    } else {
      cb(new Error('No permitido'))
    }
  }
}
app.use(express.json()) // Middleware para recibir info tipo json
app.use(cors()) // Para habilitar que puedan conectarse desde otro dominio u origen
//app.use(cors(options))  // USANDO whitelist

routerApi(app)

// Se debe utilizar acá, se ejecutan en ese orden
app.use(logErrors)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})
