const express = require('express')
const routerApi = require('./app/routes')

const app = express()
const PORT = 3000

routerApi(app)

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})
