import * as QuizDao from "./dao.js";
import * as QuestionDao from "../Questions/dao.js"
export default function QuizzesRoutes(app) {
 app.delete("/api/quizzes/:quizId", async (req, res) => {
   const { quizId } = req.params;
   const status = await QuizDao.deleteQuiz(quizId);
   res.send(status);
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await QuizDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

  // Questions
  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await QuestionDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  });
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await QuestionDao.createQuestion(question);
    res.send(newQuestion);
  });

  
}