import type { Response, Request } from "express";

export async function image(req: Request, res: Response) {
    try {

        console.log(req.body);

        res.send(req.body);
    } catch (error) {
        console.log(error);
    }
}