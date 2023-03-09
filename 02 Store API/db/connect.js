const { default: mongoose } = require('mongoose')

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log('Connected to the DB... :)')
    })
    .catch((err) => {
      console.log(error)
    })
}

module.exports = connectDB
