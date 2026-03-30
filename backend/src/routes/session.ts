import express from "express";
import { join } from "../controllers/session.controller.ts";

const sessionRouter = express.Router();

sessionRouter.post('/join', join);
sessionRouter.post('/create', join);
sessionRouter.post('/leave', join);
sessionRouter.post('/get-data', join);

export default sessionRouter;