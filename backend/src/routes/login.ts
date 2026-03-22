import express from "express";
import { login } from "../controllers/login.controller.ts";
import { loginValidation } from "../middleware/login.middleware.ts";

const loginRouter = express.Router();

loginRouter.post('/login', loginValidation, login);

export default loginRouter;