import express from "express";
import session from "express-session";
import { RedisStore } from "connect-redis";
import { Redis } from "ioredis";
import type { Request, Response } from "express";
import sequelize from "./database/database.ts"; // postgres database instance
import { Users, Quizes, QuizSession, QuizSessionConfig } from "./models/relationships.ts"; // database postgres models
import cors from "cors";
import loginRouter from "./routes/login.ts";
import registerRouter from "./routes/register.ts";
import whoamiRouter from "./routes/whoami.ts";
import sessionRouter from "./routes/session.ts";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import { image } from "./controllers/image.controller.ts";


const app = express();
const port = 3000;
dotenv.config();


export const redis = new Redis({
    port: 6379,
    host: "127.0.0.1",
    password: ""
});

const redisStore = new RedisStore({
    client: redis
});

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    credentials: true,  
}));

app.use(
    session({
        store: redisStore,
        name: "redis_session",
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: "/",
            sameSite: "none",
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60 * 60 * 24,
        },
    } as any)
);

app.use('/api/', loginRouter);
app.use('/api/', registerRouter);
app.use('/api/', whoamiRouter);
app.use('/api/', sessionRouter);



app.get('/', (req: Request, res: Response) => {
    res.send("Hello typescript with express");
});

app.post('/api/image', image);

app.listen(port, () => {
    console.log(`server is listen on port ${port}`);
});

const uri = 'mongodb://localhost:27017';

mongoose.connect(uri)
.then(() => console.log("MongoDB connected via Mongoose"))
.catch(err => console.error("MongoDB connection error:", err));

(async () => {
    sequelize.sync({ alter: true })
        .then(() => {
            app.listen(port, () => {
                console.log(`Server is running at http://localhost:${port}`);
            });
        })
        .catch(err => {
            console.error('error sync database: ', err);
        })
})();
