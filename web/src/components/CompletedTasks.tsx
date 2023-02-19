import { Grid } from '@mui/material';
import { Item } from './Item';
import { useTasks } from '../hooks/useTasks';

export const CompletedTasks = () => {
  const { tasksCompleted } = useTasks();

  return (
    <Grid
      container
      direction="column"
      gap={1}
      maxWidth="40rem"
      border={1}
      borderColor="white"
      borderRadius={2}
      padding={2}
    >
      <h1 className="text-white text-lg tracking-wide font-bold">Completed</h1>

      {tasksCompleted.map((task) => (
        <Item task={task} key={'list/completedTasks/' + task._id} />
      ))}
    </Grid>
  );
};
