const {Router} = require('express');
const { CreateQuize, QuizeById,CreateShow } = require('../controllers/quize.controller');

const quizeRouter = Router()

quizeRouter.get('/show',CreateShow)
quizeRouter.post('/create',CreateQuize)
quizeRouter.get('/show/:id',QuizeById)
quizeRouter.post('/submit',QuizeById)

module.exports = quizeRouter
