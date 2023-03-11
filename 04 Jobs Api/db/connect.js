const { default: mongoose } = require('mongoose')

require('dotenv').config()
require('mongoose')

const connetDB = async (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log(`connected to the server .......:)`)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connetDB
