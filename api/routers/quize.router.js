const {Router} = require('express');
const { CreateQuize, QuizeById,CreateShow, SubmitQuize } = require('../controllers/quize.controller');
const QuizeManger = require('../middlewares/quize.middelware');

const quizeRouter = Router()

quizeRouter.get('/show',CreateShow)
quizeRouter.post('/create',CreateQuize)
quizeRouter.get('/show/:id',QuizeById)
quizeRouter.post('/submit',QuizeManger,SubmitQuize)

module.exports = quizeRouter
