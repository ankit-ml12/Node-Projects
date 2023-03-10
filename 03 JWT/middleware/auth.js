const UnaunthenticatedError = require('../errors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnaunthenticatedError('No token is provided')
  }
  const token = authHeader.split(' ')[1]
  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    throw new UnaunthenticatedError('Not authorized to access this route')
  }
  req.user = decoded.username
  next()
}

module.exports = authenticationMiddleware
