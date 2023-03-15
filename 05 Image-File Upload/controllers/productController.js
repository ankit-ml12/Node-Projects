const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.status(StatusCodes.CREATED).json({ product })
}
const getAllProdcuts = async (req, res) => {
  const product = await Product.find({})
  res.status(StatusCodes.OK).json({ product })
}

module.exports = { createProduct, getAllProdcuts }
