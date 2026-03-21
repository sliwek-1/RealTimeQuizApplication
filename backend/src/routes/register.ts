import express from "express";
import type {Response, Request} from "express";
import { register } from "../controllers/register.controller.ts";
import { registerValidation } from "../middleware/registerValidation.ts";

const registerRouter = express.Router();

registerRouter.post('/register', registerValidation,  register);

export default registerRouter;