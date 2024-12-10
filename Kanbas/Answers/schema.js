const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  answers: [{
    questionId: String,
    answer: String,
    isCorrect: Boolean
  }]
});

export default schema;