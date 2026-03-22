import type {Response, Request, NextFunction} from "express";
import { redis } from "../index.ts";

export async function whoamiValidation(req: Request, res: Response, next: NextFunction) {
    try {
        const session = req.cookies.sessionId;
        if(!session) return res.status(400).json({message: "Not authorized session"});

        const sessionId = await redis.get(`sessionUser:${session}`);
        if(!sessionId) return res.status(400).json({message: "Session expired"});
    } catch (error) {
        throw error;
    }
    next();
}