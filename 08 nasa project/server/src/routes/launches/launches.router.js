const express = require('express')
const router = express.Router()

const {
  httpgetAllLaunches,
  httpAddNewLaunches,
  httpAbortLaunch,
} = require('../../controller/launches/launches.controller')

router.get('/launches', httpgetAllLaunches)
router.post('/launches', httpAddNewLaunches)
router.delete('/launches/:id', httpAbortLaunch)
module.exports = router
