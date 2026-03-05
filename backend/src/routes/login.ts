import express from "express";
import type { Response, Request } from "express";

const loginRouter = express.Router();

loginRouter.post('/login', (req: Request, res: Response) => {
    console.log(req);

    res.status(200).json({message: "Logged in"});
})

export default loginRouter;