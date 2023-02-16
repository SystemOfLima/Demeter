import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) throw new Error('Undefined title');

  await mongoose.connect(`${process.env.MONGO_CONNECTION}`);

  await taskModel.findByIdAndUpdate(id, {
    $set: { title },
  });

  return res.json();
};
