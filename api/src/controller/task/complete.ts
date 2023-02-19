import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Complete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const task = await taskModel.findById(id);

    if (!task) throw new Error('Task not found');

    await taskModel.findByIdAndUpdate(
      id,
      { completed: !task.completed },
      { upsert: true },
    );

    return res.send();
  } catch (err: any) {
    return res.status(400).send(err.toString());
  }
};
