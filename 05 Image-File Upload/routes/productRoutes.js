const express = require('express')
const route = express.Router()

const {
  createProduct,
  getAllProdcuts,
} = require('../controllers/productController')
const { uploadProductImage } = require('../controllers/uploadsController')

route.get('/', getAllProdcuts)
route.post('/', createProduct)
route.post('/uploads', uploadProductImage)

module.exports = route
