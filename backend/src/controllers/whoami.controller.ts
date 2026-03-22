import type { Response, Request } from "express";
import Users from "../models/User.ts";

export async function whoami(req: Request, res: Response) {
    try {
        res.status(200).json({message: "auth user"})
    } catch (error) {
        return res.status(400).json({message: "Coś poszło nie tak"});
    }
}