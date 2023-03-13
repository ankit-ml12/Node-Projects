const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { UnaunthenticatedError } = require('../errors')
require('dotenv').config()

const auth = (req, res, next) => {
  //check header
  const authheader = req.headers.authorization
  if (!authheader || !authheader.startsWith('Bearer')) {
    throw new UnaunthenticatedError('Authentication invalid')
  }
  const token = authheader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    //attach the user to the job route
    req.User = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    throw new UnaunthenticatedError('Authentication invalid')
  }
}

module.exports = auth
