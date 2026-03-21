import express from "express";
import type {Response, Request} from "express";


const registerRouter = express.Router();

registerRouter.post('/register', (req: Request, res: Response) => {
    console.log(req.sessionID);

    res.status(200).json({message: `${req.sessionID}`});
})

export default registerRouter;