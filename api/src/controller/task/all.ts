import { Request, Response } from 'express';
import { taskModel } from '../../database/model/task';

export const All = async (req: Request, res: Response) => {
  try {
    const { key, value }: any = req.query;

    const tasks = await taskModel.find({ [key]: value });

    return res.json(tasks);
  } catch (err: any) {
    return res.status(400).send(err.toString());
  }
};
