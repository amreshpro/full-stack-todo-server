import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import createError from 'http-errors';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send({ name: 'Amresh', message: 'it Works bro!' });
});

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
