import type { Response, Request } from "express";
import Users from "../models/User.ts";
import bcrypt from "bcrypt";

export async function register(req: Request, res: Response) {
    try {
        const { name, surrname, login, email, password } = req.body;

        const searchUser = await Users.findOne({
            where: { email }
        });

        if(searchUser) {
            return res.status(400).json({message: "Konto o takim adresie email już istnieje"});
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const newPassword = await bcrypt.hash(password, salt);
        const newUser = await Users.create({
            name: name,
            secondName: surrname,
            login: login,
            email: email,
            password: newPassword
        });

        if(newUser) {
            return res.status(200).json({message: "Utworzon konto"});
        } else {
             return res.status(400).json({message: "Coś poszło nie tak"});
        }
    } catch (error) {
        res.status(400).json({message: "Coś poszło nie tak"});
    }
}