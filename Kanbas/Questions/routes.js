import * as QuestionDao from "./dao.js";

export default function QuizzesRoutes(app) {

  app.delete("/api/questions/:questionId", async (req, res) => {
    const { questionId } = req.params;
    try {
        const status = await QuestionDao.deleteQuestion(questionId);
        res.status(200).send({ message: "Question deleted successfully", status });
    } catch (error) {
        if (error.message.includes("does not exist")) {
            res.status(404).send({ error: error.message });
        } else {
            res.status(500).send({ error: "An unexpected error occurred" });
        }
    }
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