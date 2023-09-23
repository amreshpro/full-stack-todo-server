import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import todoRouter from './routes/todoRoutes';
import connectDB from './db/connectDB';
import { Config } from './config';
import cors from 'cors';
// import createError from 'http-errors';

const app = express();

// connecting database
void connectDB(Config.MONGO_URL as string, 'todos');

app.get('/', (req: Request, res: Response) => {
    res.send({ name: 'Amresh', message: 'Yes, it Works big bro!' });
});

//necessary middleware for data parsing in express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//middleware route
app.use('/todo', todoRouter);

//middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        logger.error(err.message);

        const statusCode = 500;

        res.status(statusCode).json({
            errors: [
                {
                    type: err.name,
                    msg: err.message,
                    path: '',
                    location: '',
                },
            ],
        });
    }
});

export default app;
