import Todo from '../model/Todo';
import logger from '../config/logger';
import { Request, Response } from 'express';

interface TodoTypes {
    task: string;
    isTaskCompleted: boolean;
}

class TodoController {
    static async addTodo(req: Request, res: Response) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const reqBody: TodoTypes = await req.body;

        //destructuring req body
        const { task, isTaskCompleted } = reqBody;

        const isAlreadyPresent = await Todo.findOne({ task });

        if (isAlreadyPresent) {
            res.json({
                status: 'failure',
                message: 'this todo is already created',
            }).status(208);
        }

        //pass data in schema
        const doc = new Todo({
            task,
            isTaskCompleted,
            date: new Date(),
        });

        // save todo in mongodb
        await doc.save();
        logger.info('savedInDB successfully');
        res.json({
            status: 'success',
            message: 'Data saved Successfully in our Database',
        });
    }
}

export default TodoController;
