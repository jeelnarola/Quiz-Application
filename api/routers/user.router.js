const {Router} = require('express')
const { Register } = require('../controllers/user.controller')

const UserRouter = Router()

UserRouter.post('/register',Register)

module.exports = UserRouter