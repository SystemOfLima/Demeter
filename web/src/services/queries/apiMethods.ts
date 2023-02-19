import { taskType } from '../../types/tasks';
import { api } from '../axiosInstanses';

export const findAllTasks = async () => {
  const getAll = await api.get(`/`);
  return getAll.data;
};
export const findAllOpenTasks = async () => {
  const getAll = await api.get(`/`, {
    params: { key: 'completed', value: false },
  });
  return getAll.data;
};

export const findAllCompletedTasks = async () => {
  const getAll = await api.get(`/`, {
    params: { key: 'completed', value: true },
  });
  return getAll.data;
};

export const completeTask = async (id: string) => {
  await api.get(`/${id}/complete`);
};

export const createTask = async (task: Partial<taskType>) => {
  await api.post(`/`, task);
};

export const updateTask = async (id: string, data: any) => {
  await api.patch(`/${id}`, data);
};

export const deleteTask = async (id: string) => {
  await api.delete(`/${id}`);
};

export const apiMutations = {
  findAllTasks,
  findAllCompletedTasks,
  completeTask,
  createTask,
  updateTask,
  deleteTask,
};
