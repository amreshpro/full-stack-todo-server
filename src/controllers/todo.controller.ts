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
        try {
            //destructuring req body
            const todoReqBody: TodoTypes = await req.body;

            const { task, isTaskCompleted = false } = todoReqBody;

            const isAlreadyPresent = await Todo.findOne({ task });

            if (isAlreadyPresent) {
                res.json({
                    status: 'failure',
                    message: 'this todo is already created',
                }).status(208);

                return;
            }

            if (!task) {
                res.json({ status: 'failure', message: 'task is empty' });
            } else {
                //pass data in schema
                const doc = new Todo({
                    task,
                    isTaskCompleted,
                    date: new Date(),
                });

                // save todo in mongodb
                await doc.save();
                logger.info('savedIn DB successfully');
                res.json({
                    status: 'success',
                    message: 'Todo saved Successfully in our Database',
                });
            }
        } catch (error) {
            res.json(error);
        }
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
            if (deleteRes.deletedCount) {
                res.json({
                    status: 'success',
                    message: 'Todo deleted successfully',
                });
            } else {
                res.json({
                    status: 'failure',
                    message: 'Todo is not deleted. Something went wrong',
                });
            }
        }
    }

    //edit todo
    static async editTodo(req: Request, res: Response) {
        const { id, task, isTaskCompleted } = await req.body;

        if (!id && !task && !isTaskCompleted)
            res.json({
                status: 'failure',
                message: 'Data is empty of short in length',
            });
        else {
            const isExisted = await Todo.find({ id });
            logger.info(isExisted);

            if (isExisted) {
                const editedRes = await Todo.updateOne(
                    { _id: id },
                    { $set: { task, isTaskCompleted } },
                );

                logger.info({ ...editedRes });
                if (editedRes) {
                    res.json({
                        status: 'success',
                        message: 'Todo edited successfully',
                    });
                } else {
                    res.json({
                        status: 'failure',
                        message: 'Todo is not deleted. Something went wrong',
                    });
                }

                return;
            }
        }
    }

    // getAllTodo
    static async getAllTodo(req: Request, res: Response) {
        try {
            const allTodoResponse = await Todo.find({});
            if (allTodoResponse) {
                logger.info(allTodoResponse);
                res.json(allTodoResponse);
            } else {
                res.json({
                    status: 'success',
                    message: 'Todo List is empty. Please enter some new todo.',
                });
            }
        } catch (error) {
            logger.error(error);
        }
    }

    //get Todo by Id
    static async getTodoById(req: Request, res: Response) {
        try {
            const { id } = req.body;

            const resById = await Todo.findById({ _id: id });
            console.log(resById);
            if (resById) {
                logger.info(resById);
                res.json(resById);
            } else {
                res.json({
                    status: 'success',
                    message: 'Todo List is empty. Please enter some new todo.',
                });
            }
        } catch (error) {
            logger.error(error);
        }
    }
}

export default TodoController;
