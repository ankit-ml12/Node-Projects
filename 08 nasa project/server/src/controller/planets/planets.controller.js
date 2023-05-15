const { getAllPlanets } = require('../../models/planets/planets.model')

const httpgetAllPlanets = async (req, res) => {
  return res.status(200).json(getAllPlanets())
}

module.exports = { httpgetAllPlanets }
