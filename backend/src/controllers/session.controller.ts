import type { Response, Request } from "express";

export async function join(req: Request, res: Response) {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

export async function create(req: Request, res: Response) {
    try {
        const {title, description, status, answerTime, examTime, isAccountRequired, isWarnings, passRate} = req.body;
        console.log(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.log(error);
    }
}

export async function leave(req: Request, res: Response) {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

export async function getData(req: Request, res: Response) {
    try {
        
    } catch (error) {
        console.log(error);
    }
}