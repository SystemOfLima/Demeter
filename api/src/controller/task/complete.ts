import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Complete = async (req: Request, res: Response) => {
  const { id } = req.params;

  await mongoose.connect(`${process.env.MONGO_CONNECTION}`);

  await taskModel.findByIdAndUpdate(
    id,
    {
      $addToSet: { completed: new Date() },
    },
    { upsert: true },
  );

  return res.send();
};
