const express = require('express')
const router = express.Router()

const {
  httpgetAllLaunches,
} = require('../../controller/launches/launches.controller')

router.get('/launches', httpgetAllLaunches)
module.exports = router
