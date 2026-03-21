import type { Response, Request } from "express";
import Users from "../models/User.ts";
import bcrypt from "bcrypt";

export async function register(req: Request, res: Response) {
    try {
        const { name, surrname, login, email, password } = req.body;

        const newUser = await Users.create({
            
        })
    } catch (error) {
        throw error;
    }
}