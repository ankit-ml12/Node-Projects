const getAllTasks = (req, res) => {
  res.send('all items')
}
const creatTask = (req, res) => {
  console.log(req.body)

  res.json(req.body)
}
const getTask = (req, res) => {
  res.json(req.params)
}
const updateTask = (req, res) => {
  res.json(req.params)
}
const deleteTask = (req, res) => {
  res.json(req.params)
}

module.exports = { getAllTasks, creatTask, getTask, updateTask, deleteTask }
