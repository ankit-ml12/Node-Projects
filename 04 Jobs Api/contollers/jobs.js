const getAllJobs = async (req, res) => {
  res.send('get all jobs')
}
const getJob = async (req, res) => {
  res.send('get  jobs')
}
const createJobs = async (req, res) => {
  res.send(req.User)
}
const updateJobs = async (req, res) => {
  res.send('update jobs')
}
const deleteJobs = async (req, res) => {
  res.send('delete  jobs')
}

module.exports = { getAllJobs, getJob, createJobs, updateJobs, deleteJobs }
