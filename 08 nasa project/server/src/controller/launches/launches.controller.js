const {
  getAllLaunches,
  addNewLaunch,
} = require('../../models/planets/launches.model')
const httpgetAllLaunches = async (req, res) => {
  return res.status(200).json(getAllLaunches())
}
function httpAddNewLaunches(req, res) {
  const launch = req.body

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({ error: 'missing required property' })
  }

  launch.launchDate = new Date(launch.launchDate)
  if (isNan(launch.launchDate)) {
    return res.status(400).json({ error: 'invalid lauch data' })
  }

  addNewLaunch(launch)
  return res.status(201).json(launch)
}

module.exports = { httpgetAllLaunches, httpAddNewLaunches }
