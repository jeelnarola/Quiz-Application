const {Router} = require('express');
const { CreateQuize, QuizeById } = require('../controllers/quize.controller');

const quizeRouter = Router()

quizeRouter.post('/create',CreateQuize)
quizeRouter.get('/show/:id',QuizeById)
quizeRouter.post('/submit',QuizeById)

module.exports = quizeRouter
