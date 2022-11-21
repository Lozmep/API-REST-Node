const express = require('express')

const router = express.Router()
const ProductsService = require('../services/products.service')

const productsService = new ProductsService()

router.get('/', async (req,res) => {
  const products = await productsService.find()
  res.status(200).send(products)
})

router.get('/filter', async (req,res) => {
  res.send('Filter')
})

router.post('/', async (req,res) => {
  const { body } = req
  const product = await productsService.create(body)
  res.status(201).send({
    product
  })
})

router.patch('/:id', async (req,res,next) => {
  try {
    const { id } = req.params
    const { body } = req
    const product = await productsService.update(id,body)
    res.status(200).send(product)
  } catch(err) {
    next(err)
  }

})

router.get('/:id', async (req,res,next) => {
  try {
      const { id } = req.params
    const product = await productsService.findOne(id)
    if (!product) { res.status(400).send({message: 'Not Found'}) }
    res.status(200).send(product)
  } catch(err) {
    next(err)
  }

})

router.delete('/:id', async (req,res) => {
  const { id } = req.params
  const message = await productsService.delete(id)
  if (!message) { return res.status(404).send({ message: 'Not foundasync ' }) }
  res.status(200).send(message)
})

module.exports = router
