import { Grid } from '@mui/material';
import { Item } from './Item';
import { useTasks } from '../hooks/useTasks';

export const ListTasks = () => {
  const { tasks } = useTasks();

  return (
    <Grid
      container
      gap={1}
      maxWidth="40rem"
      border={1}
      borderColor="white"
      borderRadius={2}
      padding={2}
    >
      <h1 className="text-white text-lg tracking-wide font-bold">Tasks</h1>

      {tasks.map((task, i) => (
        <Item task={task} key={`list/tasks/${task.title}-${i}`} />
      ))}
    </Grid>
  );
};
