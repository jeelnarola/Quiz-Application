const mongoose = require('mongoose')

const QuizeSchema = new mongoose.Schema({
    "title": "String",
    "description": "String",
    "questions": [
      {
        "questionText": "String",
        "options": [
          {
            "text": "String",
            "isCorrect": "Boolean"
          }
        ],
        "explanation": "String"
      }
    ]
})

const Quize = mongoose.model('Quize',QuizeSchema)

module.exports = Quize