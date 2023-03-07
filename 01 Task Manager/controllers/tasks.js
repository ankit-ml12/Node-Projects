const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({})
    res.status(200).json({ size: task.length, task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const creatTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    //we pass third parameter to update the return task value and run the validator from the schema
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndDelete({ _id: taskID })
    console.log(task)
    if (!task) {
      return res.status(404).json({ msg: `No task found with id ${taskID}` })
    }
    return res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
