import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Delete = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) throw new Error('Undefined ID');

  await mongoose.connect(`${process.env.MONGO_CONNECTION}`);

  await taskModel.findByIdAndDelete(id);

  return res.send();
};
