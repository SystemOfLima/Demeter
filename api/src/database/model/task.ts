import { taskSchema } from '../schema/task';
import { model } from 'mongoose';

export const taskModel = model('tasks', taskSchema);
