const express = require('express')
const router = express.Router()

const { getAllPlanets } = require('../../controller/planets/planets.controller')

router.get('/planets', getAllPlanets)

module.exports = router
