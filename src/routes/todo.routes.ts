/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import TodoController from '../controllers/todo.controller';
import express from 'express';

const todoRouter = express.Router();

// save
// eslint-disable-next-line @typescript-eslint/unbound-method, @typescript-eslint/no-misused-promises
todoRouter.post('/add', TodoController.addTodo);
todoRouter.delete('/delete', TodoController.deleteTodo);
todoRouter.get('/list', TodoController.getAllTodo);
todoRouter.put('/edit', TodoController.editTodo);
todoRouter.post('/id', TodoController.getTodoById);

export default todoRouter;
