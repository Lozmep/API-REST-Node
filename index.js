const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req,res) => {
  res.send('Server works')
})

app.get('/nueva-ruta', (req,res) => {
  res.send('Another endpoint')
})

app.get('/products', (req,res) => {
  res.json({
    name: 'Producto 1',
    price: '1000'
  })
})

app.listen(PORT, () => {
  console.log(`Server Listen at port ${PORT}`)
})
