const launches = new Map()
const launch = {
  flighNumner: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'kepler-442 b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: true,
}

launch.set(launch.flighNumner, launch)
module.exports = {
  launches,
}
