const express = require('express')
const router = express.Router()

const {
  httpgetAllLaunches,
  httpAddNewLaunches,
} = require('../../controller/launches/launches.controller')

router.get('/launches', httpgetAllLaunches)
router.post('/launches', httpAddNewLaunches)
module.exports = router
