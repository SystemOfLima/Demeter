import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const FindCompleted = async (_: Request, res: Response) => {
  await mongoose.connect(`${process.env.MONGO_CONNECTION}`);

  const tasks = await taskModel.find({ completed: { $exists: true } });

  return res.json(tasks);
};
