const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const register = async (req, res) => {
  const { email, name, password } = req.body
  if (!email || !name || !password) {
    res.json({ ...req.body })
    throw new BadRequestError('email, name, or password something missing')
  }

  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('login successfull')
}

module.exports = { register, login }
