import type {Response, Request} from "express";
import bcrypt from "bcrypt";
import Users from "../models/User.ts";
import { redis } from "../index.ts";

import { v4 as uuidv4 } from "uuid";

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        const user = await Users.findOne({
            where: { email },
            attributes: ['uniqueId', 'name', 'secondName', 'email', 'password']
        });

        if(!user) {
            return res.status(400).json({message: "Nie ma takiego użytkownika"});
        }
        console.log(user)
        const isPasswordOk = await bcrypt.compare(password, user.dataValues.password);

        if(!isPasswordOk) {
            return res.status(400).json({message: "Hasło lub email są nie poprawne"});
        }

        const sessionId = uuidv4();
        const sessionData = {
            name: user.dataValues.name,
            surrname: user.dataValues.secondName,
            email: user.dataValues.email,
            id: user.dataValues.uniqueId
        }

        await redis.set(
            `sessionUser:${sessionId}`,
            JSON.stringify(sessionData),
            "EX",
            60*60*24
        );

        res.cookie("sessionId", sessionId, {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });

        res.status(200).json({message: "Logged in"});

    } catch (error) {
        throw error;
    }
}