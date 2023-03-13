const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnaunthenticatedError } = require('../errors')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })

  res
    .status(StatusCodes.CREATED)
    .json({ name: user.name, token: user.getToken() })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Email or password is missing')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnaunthenticatedError('Invalid Credentials')
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnaunthenticatedError('Invalid Credentials')
  }
  const token = user.getToken()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

module.exports = { register, login }
