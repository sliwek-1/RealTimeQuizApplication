import express from "express";
import { register } from "../controllers/register.controller.ts";
import { whoamiValidation } from "../middleware/whoami.middleware.ts";

const whoamiRouter = express.Router();

whoamiRouter.post('/whoami', whoamiValidation,  );

export default whoamiRouter;