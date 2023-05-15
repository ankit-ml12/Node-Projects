const { getAllLaunches } = require('../../models/planets/launches.model')
const httpgetAllLaunches = async (req, res) => {
  return res.status(200).json(getAllLaunches())
}

module.exports = { httpgetAllLaunches }
