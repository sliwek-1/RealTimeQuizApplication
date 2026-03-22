import express from "express";
import { register } from "../controllers/register.controller.ts";
import { registerValidation } from "../middleware/register.middleware.ts";

const registerRouter = express.Router();

registerRouter.post('/register', registerValidation,  register);

export default registerRouter;