import type { Response, Request } from "express";
import Users from "../models/User.ts";
import { redis } from "../index.ts";

export async function whoami(req: Request, res: Response) {
    try {
        const userRaw = await redis.get(`sessionUser:${req.cookies.sessionId}`);
        const userData = userRaw ? JSON.parse(userRaw) : null;
        
        res.status(200).json({message: "auth user", userData})
    } catch (error) {
        return res.status(400).json({message: "Coś poszło nie tak"});
    }
}