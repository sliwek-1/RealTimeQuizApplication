import express from "express";
import type { Request, Response } from "express";
import sequelize from "./database/database.ts"; // postgres database instance
import { Users, Quizes, QuizSession, QuizSessionConfig } from "./models/relationships.ts"; // database postgres models


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("Hello typescript with express");
})

app.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})

sequelize.sync({ alter: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('error sync database: ', err);
    })