import model from "./model.js";

export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });
}

export function createQuestion(question) {
    delete question._id
    return model.create(question);
}

export async function deleteQuestion(questionId) {
    const result = await model.deleteOne({ _id: questionId });
    if (result.deletedCount === 0) {
        throw new Error(`Question with ID ${questionId} does not exist`);
    }
    return result;
}

export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);
}