import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { taskModel } from '../../database/model/task';

export const Create = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) throw new Error('Undefined title');

    await taskModel.create({
      title,
      createdAt: new Date(),
    });

    return res.status(201).send();
  } catch (err: any) {
    return res.status(400).send(err.toString());
  }
};
