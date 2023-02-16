import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const All = async (req: Request, res: Response) => {
  await mongoose.connect(`${process.env.MONGO_CONNECTION}`);

  const tasks = await taskModel.find({});

  return res.json(tasks);
};
