import express from "express";
import { session } from "../controllers/session.controller.ts";

const sessionRouter = express.Router();

sessionRouter.post('/join', session);

export default sessionRouter;