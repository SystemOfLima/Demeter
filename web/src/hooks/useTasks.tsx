import { useContext } from 'react';
import { TaskContext } from '../contexts/tasksContext';

export const useTasks = () => useContext(TaskContext);
