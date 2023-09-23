import TodoController from '../controllers/todoController';
import express from 'express';

const todoRouter = express.Router();

// save
// eslint-disable-next-line @typescript-eslint/unbound-method, @typescript-eslint/no-misused-promises
todoRouter.post('/save', TodoController.addTodo);

export default todoRouter;
