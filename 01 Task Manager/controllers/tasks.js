const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({})
  res.status(200).json({ size: task.length, task })
})

const creatTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404))
  }
  return res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  //we pass third parameter to update the return task value and run the validator from the schema
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404))
  }
  return res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findByIdAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id ${taskID}`, 404))
  }
  return res.status(200).json({ task })
})

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
