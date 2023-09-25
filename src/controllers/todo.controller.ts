import Todo from '../model/todo.model';
import logger from '../config/logger';
import { Request, Response } from 'express';

interface TodoTypes {
    _id?: string;
    date?: string;
    task?: string;
    isTaskCompleted?: boolean;
}

class TodoController {
    // add todo
    static async addTodo(req: Request, res: Response) {
        //destructuring req body
        const todoReqBody: TodoTypes = await req.body;

        const { task, isTaskCompleted } = todoReqBody;

        const isAlreadyPresent = await Todo.findOne({ task });

        if (isAlreadyPresent) {
            res.json({
                status: 'failure',
                message: 'this todo is already created',
            }).status(208);

            return;
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

    //delete todo
    static async deleteTodo(req: Request, res: Response) {
        const { id } = await req.body;
        logger.info(req.body);

        const isExisted = await Todo.find({ id });
        logger.info(isExisted);

        if (isExisted) {
            const deleteRes = await Todo.deleteOne({ _id: id });

            logger.info({ ...deleteRes });
            if (deleteRes.deletedCount)
                res.json({
                    status: 'success',
                    message: 'Todo deleted successfully',
                });
            res.json({
                status: 'failure',
                message: 'Todo is not deleted. Something went wrong',
            });
        }
    }

    //edit todo
    static async editTodo(req: Request, res: Response) {
        const { id, task, isTaskCompleted } = await req.body;
        logger.info(req.body);

        const isExisted = await Todo.find({ id });
        logger.info(isExisted);

        if (isExisted) {
            const editedRes = await Todo.updateOne(
                { _id: id },
                { $set: { task, isTaskCompleted } },
            );

            logger.info({ ...editedRes });
            if (editedRes)
                res.json({
                    status: 'success',
                    message: 'Todo edited successfully',
                });
            res.json({
                status: 'failure',
                message: 'Todo is not deleted. Something went wrong',
            });

            return;
        }
    }

    // getAllTodo
    static async getAllTodo(req: Request, res: Response) {
        try {
            const allTodoResponse = await Todo.find({});
            if (allTodoResponse) {
                logger.info(allTodoResponse);
                res.json(allTodoResponse);
            }

            res.json({
                status: 'success',
                message: 'Todo List is empty. Please enter some new todo.',
            });
        } catch (error) {
            logger.error(error);
        }
    }

    //get Todo by Id
    static async getTodoById(req: Request, res: Response) {
        try {
            const { id } = req.body;

            const resById = await Todo.find({ id });
            if (resById) {
                logger.info(resById);
                res.json(resById);
            }

            res.json({
                status: 'success',
                message: 'Todo List is empty. Please enter some new todo.',
            });
        } catch (error) {
            logger.error(error);
        }
    }
}

export default TodoController;
