const { BadRequestError } = require('../errors')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    throw new BadRequestError('Email or Password is missiong')
  }

  //just for demo, normally provided by database
  const id = new Date().getDate()

  // the smaller is payload better experience for the user
  // just for demo in production use long, complex and ungesseable string value!!!
  // if someone know your secret string then they can sign token on behalf of you
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res, next) => {
  res.status(200).json({
    msg: `Hello ${req.user}`,
    secret: ` here is your authorized data. Here is your lucky number ${
      100 * Math.random()
    }`,
  })
}

module.exports = { login, dashboard }
