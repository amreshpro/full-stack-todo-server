import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    date: { type: Date, required: true },
    isTaskCompleted: { type: Boolean, default: false },
});

const Todo = mongoose.model('todos', todoSchema);

export default Todo;
