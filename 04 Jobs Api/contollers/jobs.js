const Job = require('../models/Job')
const { StatusCodes, getStatusCode } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const { login } = require('./auth')

const getAllJobs = async (req, res) => {
  const job = await Job.find({ createdBy: req.User.userId }).sort('createdAt')
  res.status(StatusCodes.OK).json({ count: job.length, job })
}
const getJob = async (req, res) => {
  const {
    User: { userId },
    params: { id: jobId },
  } = req
  const job = await Job.findOne({ _id: jobId, createdBy: userId })
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}
const createJobs = async (req, res) => {
  req.body.createdBy = req.User.userId
  const job = await Job.create(req.body)
  await res.status(StatusCodes.OK).json({ job })
}
const updateJobs = async (req, res) => {
  const {
    body: { company, position },
    User: { userId },
    params: { id: jobId },
  } = req
  if (!company || !position) {
    throw new BadRequestError('company and position name cannot be empty')
  }
  const job = await Job.findByIdAndUpdate(
    {
      _id: jobId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  )
  if (!job) {
    throw new BadRequestError(`No job found with ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}

const deleteJobs = async (req, res) => {
  const {
    User: { userId },
    params: { id: jobId },
  } = req
  const job = await Job.findByIdAndRemove({ _id: jobId, createdBy: userId })
  if (!job) {
    throw new BadRequestError(`No job found with ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}

module.exports = { getAllJobs, getJob, createJobs, updateJobs, deleteJobs }
