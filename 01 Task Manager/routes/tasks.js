const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  creatTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

// router.get('/', getAllTasks)
// router.post('/', creatTask)
// router.get('/:id', getTask)
// router.patch('/:id', updateTask)
// router.delete('/:id', deleteTask)

router.route('/').get(getAllTasks).post(creatTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router
