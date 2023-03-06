const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')

//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
