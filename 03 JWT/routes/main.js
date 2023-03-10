const express = require('express')
const route = express.Router()

const authMiddleware = require('../middleware/auth')
const { login, dashboard } = require('../controllers/main')
route.post('/login', login)
route.get('/dashboard', authMiddleware, dashboard)

module.exports = route
