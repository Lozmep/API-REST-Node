const faker = require('faker')

class ProductsService {

  constructor() {
    this.products = []
    this.generate(100)
  }

  async generate(size) {
    const limit = size || 10
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl()
      })
    }
  }

  async create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find() {
    return this.products
  }

  async findOne(id) {
    return this.products.find(product => product.id === id)
  }

  update(id, changes) {
    const index = this.products.findIndex(product => product.id === id)
    if (index<0) {
      throw new Error('Product not found')
    }
    /**
     * this.products[index] = {
     *  ...product,
     *  ...changesasync
     * }
     */
    Object.keys(changes).forEach((key) => {
      this.products[index][key] = changes[key]
    })
    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(product => product.id === id)
    if (index<0) {
      throw new Error('Product not found')
    }
    this.products.splice(index,1)
    return { id }
  }

}

module.exports = ProductsService
