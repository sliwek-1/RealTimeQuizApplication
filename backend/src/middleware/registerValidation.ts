import type {Response, Request, NextFunction} from "express";

export async function registerValidation(req: Request, res: Response, next: NextFunction) {
    try {
        const {name, surrname, login, email, password} = req.body;
        if(!name || name.trim().length < 1 || typeof name != "string")  return res.status(400).json({message: "Imie nie może być puste"});
        if(!surrname || surrname.trim().length < 1 || typeof name != "string")  return res.status(400).json({message: "Nazwisko nie może być puste"});
        if(!login || login.trim().length < 1 || typeof name != "string")  return res.status(400).json({message: "Login nie może być puste"});
        if(!email || email.trim().length < 1 || typeof email != "string" || !email.includes('@')) return res.status(400).json({message: "Email jest nie poprawny"});
        if(!password || password.trim().length < 8 || typeof password != "string") return res.status(400).json({message: "Hasło musi składać się z conajmniej 8 znaków"});
    } catch (error) {
        throw error;
    }
    next();
}