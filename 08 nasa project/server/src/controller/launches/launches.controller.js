const {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLauchById,
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
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({ error: 'invalid lauch data' })
  }

  addNewLaunch(launch)
  return res.status(201).json(launch)
}
function httpAbortLaunch(req, res) {
  const LaunchId = Number(req.params.id)

  if (!existsLaunchWithId(LaunchId))
    return res.status(404).json({ error: 'Launch not found' })

  const aborted = abortLauchById(LaunchId)
  return res.status(200).json(aborted)
}

module.exports = { httpgetAllLaunches, httpAddNewLaunches, httpAbortLaunch }
