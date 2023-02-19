import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Delete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error('Undefined ID');

    await taskModel.findByIdAndDelete(id);

    return res.send();
  } catch (err: any) {
    return res.status(400).send(err.toString());
  }
};
