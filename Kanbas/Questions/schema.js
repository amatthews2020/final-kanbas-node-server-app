import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    type: String,
    points: Number,
    question: String,
    choices: [String],
    answer: mongoose.Schema.Types.Mixed,
  },
  { collection: "questions" }
);
export default schema;