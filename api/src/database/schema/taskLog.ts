import mongoose, { Schema } from 'mongoose';

export const taskSchema = new Schema(
  {
    taskId: mongoose.Types.ObjectId,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
