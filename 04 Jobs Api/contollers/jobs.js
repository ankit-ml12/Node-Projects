const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const { login } = require('./auth')
const getAllJobs = async (req, res) => {
  const job = await Job.find({ createdBy: req.User.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ count: job.length, job })
}
const getJob = async (req, res) => {
  res.send('get  jobs')
}
const createJobs = async (req, res) => {
  req.body.createdBy = req.User.userId
  const job = await Job.create(req.body)
  await res.status(StatusCodes.OK).json({ job })
}
const updateJobs = async (req, res) => {
  res.send('update jobs')
}
const deleteJobs = async (req, res) => {
  res.send('delete  jobs')
}

module.exports = { getAllJobs, getJob, createJobs, updateJobs, deleteJobs }
