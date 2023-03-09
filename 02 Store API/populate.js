require('dotenv').config()
const { model } = require('mongoose')
const connectDB = require('./db/connect')
const product = require('./models/product')
const jsonProducts = require('./product.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    //clear all products
    await product.deleteMany()
    await product.create(jsonProducts)
    console.log('Sucees !!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
