const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/', (req,res) => {
  const limit = req.query.size || 10
  const products = []
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products)
})

router.get('/filter', (req,res) => {
  res.send('Filter')
})

router.post('/', (req,res) => {
  const { body } = req
  res.json({
    message: 'Created',
    data: body
  })
})

router.patch('/:id', (req,res) => {
  const { id } = req.params
  const { body } = req
  res.json({
    message: 'Updated',
    data: body,
    id
  })
})

router.get('/:id', (req,res) => {
  const { id } = req.params
  if (id==='1') {
    return res.json({
      id,
      name: 'Producto 1',
      price: '1000'
    },)
  }
  res.json({
    id,
    name: 'Producto 2',
    price: '2000'
  },)
})

router.delete('/:id', (req,res) => {
  const { id } = req.params
  res.json({
    message: 'Deleted',
    id
  })
})

module.exports = router
