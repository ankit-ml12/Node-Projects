const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide Name'],
    minlength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, 'Please provide Email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please, provide valid email',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    // maxLength: 12,
  },
})

//we want to presave our password so we use pre function with userschema
//we use this function instead of arrow function because it scope it to parent element that is not the case with the arrow function
UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.getName = function () {
  return this.name
}
UserSchema.methods.getToken = function () {
  const token = jwt.sign(
    { userId: this._id, name: this.name },
    prcess.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
  return token
}

module.exports = mongoose.model('User', UserSchema)
