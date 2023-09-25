/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import TodoController from '../controllers/todo.controller';
import express from 'express';

const todoRouter = express.Router();

// save
// eslint-disable-next-line @typescript-eslint/unbound-method, @typescript-eslint/no-misused-promises
todoRouter.post('/save', TodoController.addTodo);
todoRouter.post('/delete', TodoController.deleteTodo);
todoRouter.post('/list', TodoController.getAllTodo);
todoRouter.post('/item', TodoController.getTodoById);

export default todoRouter;
