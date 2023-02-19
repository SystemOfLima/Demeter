import { Ref, createContext, useEffect, useRef, useState } from 'react';
import { taskType } from '../types/tasks';
import { apiMutations } from '../services/queries/apiMethods';

export const TaskContext = createContext<taskContextValues>(null);

export const TaskProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<taskType[]>([]);

  const taskTitleInput = useRef<{ value: string }>();

  const getTasks = async () => {
    const response = await apiMutations
      .findAllOpenTasks()
      .catch((err) => console.log(err));
    setTasks(response);
  };

  const getCompletedTasks = async () => {
    const response = await apiMutations
      .findAllCompletedTasks()
      .catch((err) => console.log(err));
    setTasksCompleted(response);
  };

  const createTask = async () => {
    const { value } = taskTitleInput.current;

    await apiMutations
      .createTask({ title: value })
      .catch((err) => console.log(err));

    getTasks();
  };

  const completeTask = async (id: string) => {
    await apiMutations.completeTask(id).catch((err) => console.log(err));

    getTasks();
    getCompletedTasks();
  };

  const updateTaskTittle = async (id: string) => {
    const { value } = taskTitleInput.current;

    await apiMutations
      .updateTask(id, { title: value })
      .catch((err) => console.log(err));

    getTasks();
  };

  const deleteTask = async (id: string) => {
    await apiMutations.deleteTask(id).catch((err) => console.log(err));

    getTasks();
    getCompletedTasks();
  };

  useEffect(() => {
    getTasks();
    getCompletedTasks();
  }, []);

  const values: taskContextValues = {
    getTasks,
    tasks,
    createTask,
    getCompletedTasks,
    updateTaskTittle,
    deleteTask,
    tasksCompleted,
    taskTitleInput,
    completeTask,
  };

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};

interface taskContextValues {
  tasks: taskType[];
  tasksCompleted: taskType[];
  getTasks: () => void;
  getCompletedTasks: () => void;
  createTask: () => void;
  updateTaskTittle: (id: string) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  taskTitleInput: React.Ref<{ value: string }>;
}
