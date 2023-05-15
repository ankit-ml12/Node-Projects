const express = require('express')
const router = express.Router()

const {
  httpgetAllPlanets,
} = require('../../controller/planets/planets.controller')

router.get('/planets', httpgetAllPlanets)

module.exports = router
