import express from "express";
import type { Request, Response } from "express";
import sequelize from "./database/database.ts"; // postgres database instance
import { Users, Quizes, QuizSession, QuizSessionConfig } from "./models/relationships.ts"; // database postgres models
import cors from "cors";
import loginRouter from "./routes/login.ts";
import mongoose from "mongoose";


const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true,  
}));

app.use('/api/', loginRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello typescript with express");
})

app.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})

const uri = 'mongodb://localhost:27017';

mongoose.connect(uri)
.then(() => console.log("MongoDB connected via Mongoose"))
.catch(err => console.error("MongoDB connection error:", err));



sequelize.sync({ alter: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('error sync database: ', err);
    })