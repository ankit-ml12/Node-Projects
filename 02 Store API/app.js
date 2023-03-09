//
require('dotenv').config()
const express = require('express')
const app = express()
require('express-async-errors')

const connectDB = require('./db/connect')
const port = process.env.PORT || 3000
const productRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/errorHandler')

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ name: 'ankit' })
})
app.use('/api/v1/products', productRouter)

//product routes
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(` server is listning on port ${port}`)
    })
  } catch (error) {}
}
start()
