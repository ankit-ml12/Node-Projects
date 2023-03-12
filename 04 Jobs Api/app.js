require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const url = process.env.MONGO_URI

//connect db
const connectDB = require('./db/connect')

//routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

//error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.json())

//routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
// app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(url)
    app.listen(port, () => {
      console.log(`server is listning on ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
