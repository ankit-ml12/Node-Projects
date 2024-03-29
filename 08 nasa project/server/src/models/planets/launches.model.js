const launches = new Map()

let latestFlightNumber = 100
const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
}
launches.set(launch.flightNumber, launch)

function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['Zero to Mastery', 'NASA'],
      flightNumber: latestFlightNumber,
    })
  )
}

function existsLaunchWithId(LaunchId) {
  return launches.has(LaunchId)
}
function abortLauchById(LaunchId) {
  const abordted = launches.get(LaunchId)
  abordted.upcoming = false
  abordted.success = false
  console.log(abordted)
  return abordted
}

launches.set(launch.flightNumber, launch)
module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLauchById,
}
