import express from "express";
import { whoamiValidation } from "../../middleware/whoami.middleware.ts";
import { setupQuiz } from "../../controllers/quiz.controller.ts";

const quizCreatorRouter = express.Router();

quizCreatorRouter.post('/setup-quiz', whoamiValidation, setupQuiz);

export default quizCreatorRouter;