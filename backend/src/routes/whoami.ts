import express from "express";
import { whoamiValidation } from "../middleware/whoami.middleware.ts";
import { whoami } from "../controllers/whoami.controller.ts";

const whoamiRouter = express.Router();

whoamiRouter.post('/whoami', whoamiValidation,  whoami);

export default whoamiRouter;