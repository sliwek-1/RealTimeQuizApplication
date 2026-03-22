import type {Response, Request, NextFunction} from "express";

export async function loginValidation(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, password } = req.body;
        if(!email || email.trim().length < 1 || typeof email != "string" || !email.includes('@')) return res.status(400).json({message: "Email jest nie poprawny"});
        if(!password || password.trim().length < 8 || typeof password != "string") return res.status(400).json({message: "Hasło musi składać się z conajmniej 8 znaków"});
    } catch (error) {
        throw error;
    }
    next();
}