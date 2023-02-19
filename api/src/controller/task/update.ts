import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) throw new Error('Undefined title');

    await taskModel.findByIdAndUpdate(id, {
      $set: { title },
    });

    return res.json();
  } catch (err: any) {
    return res.status(400).send(err.toString());
  }
};
