const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name is necessary'],
  },
  price: {
    type: Number,
    required: [true, 'product price is necessary'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    //set error msg
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: `{VALUE} is not supported`,
    },
  },
})

module.exports = mongoose.model('Products', productSchema)
