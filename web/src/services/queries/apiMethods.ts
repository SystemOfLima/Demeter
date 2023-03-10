import { taskType } from '../../types/tasks';
import { api } from '../axiosInstanses';

const findAllTasks = async () => {
  const getAll = await api.get(`/`);
  return getAll.data;
};
const findAllOpenTasks = async () => {
  const getAll = await api.get(`/`, {
    params: { key: 'completed', value: false },
  });
  return getAll.data;
};

const findAllCompletedTasks = async () => {
  const getAll = await api.get(`/`, {
    params: { key: 'completed', value: true },
  });
  return getAll.data;
};

const completeTask = async (id: string) => {
  await api.get(`/${id}/complete`);
};

const createTask = async (task: Partial<taskType>) => {
  await api.post(`/`, task);
};

const updateTask = async (id: string, data: any) => {
  await api.patch(`/${id}`, data);
};

const deleteTask = async (id: string) => {
  await api.delete(`/${id}`);
};

export const apiMutations = {
  findAllTasks,
  findAllOpenTasks,
  findAllCompletedTasks,
  completeTask,
  createTask,
  updateTask,
  deleteTask,
};
