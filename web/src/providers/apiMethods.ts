import { axios } from '../utils/axios';

export const findAllTasks = async () => {
  return await axios.get(`/`);
};

export const findAllCompletedTasks = async () => {
  return await axios.get(`/completed`);
};

export const completeTask = async (id: string) => {
  await axios.get(`/${id}/complete`);
};

export const updateTask = async (id: string, data: any) => {
  await axios.patch(`/${id}`, data);
};

export const deleteTask = async (id: string) => {
  await axios.delete(`/${id}`);
};
