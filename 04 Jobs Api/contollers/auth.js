const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })

  res
    .status(StatusCodes.CREATED)
    .json({ name: user.name, token: user.getToken() })
}

const login = async (req, res) => {
  res.send('login successfull')
}

module.exports = { register, login }
