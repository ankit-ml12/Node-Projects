const express = require('express')
const cors = require('cors')
const path = require('path')
const planetsRouter = require('./routes/planets/planet.router')
const launchesRouter = require('./routes/launches/launches.model')
const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(planetsRouter)
app.use(launchesRouter)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.listen(8000, () => {
  console.log('server is listning on port 5000')
})

module.exports = app
