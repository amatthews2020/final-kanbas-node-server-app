import * as QuestionDao from "./dao.js";

export default function QuizzesRoutes(app) {

  app.delete("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const status = await QuestionDao.deleteQuestion(questionId);
    res.send(status);
  });

  app.post("/api/questions/:quesitonId", async (req, res) => {
    const { questionId } = req.params;
    const question = req.body;
    const status = await QuestionDao.createQuestion(question);
    res.send(status);
  });

  app.put("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const status = await QuestionDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });
}