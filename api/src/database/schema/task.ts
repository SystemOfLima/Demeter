import { Schema } from 'mongoose';

export const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  completed: {
    type: Date,
    require: false,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});
