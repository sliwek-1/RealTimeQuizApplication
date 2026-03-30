import express from "express";
import { join } from "../controllers/session.controller.ts";
import { whoamiValidation } from "../middleware/whoami.middleware.ts";

const sessionRouter = express.Router();

sessionRouter.post('/session/join', join);
sessionRouter.post('/session/create', whoamiValidation, join);
sessionRouter.post('/session/leave', join);
sessionRouter.post('/session/get-data', join);

export default sessionRouter;