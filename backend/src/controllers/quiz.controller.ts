import type { Request, Response } from "express";
import { redis } from "../index.ts";

export const setupQuiz = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        res.status(200).send(data);
    } catch(error) {
        console.log(error);
    } finally {

    }
}