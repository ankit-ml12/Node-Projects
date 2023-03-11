const express = require('express')
const route = express.Router()

const {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJobs,
} = require('../contollers/jobs')

route.get('/', getAllJobs)
route.get('/:id', getJob)
route.post('/', createJobs)
route.patch('/:id', updateJobs)
route.delete('/:id', deleteJobs)

module.exports = route
