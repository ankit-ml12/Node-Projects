const express = require('express')
const cors = require('cors')
const planetsRouter = require('./routes/planets/planets.router')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(planetsRouter)

app.listen(8000, () => {
  console.log('server is listning on port 5000')
})

module.exports = app
