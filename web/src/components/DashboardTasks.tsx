import { Grid } from '@mui/material';
import { ListTasks } from './ListTasks';
import { CreateTask } from './CreateTask';
import { CompletedTasks } from './CompletedTasks';

export const DashboardTasks = () => {
  return (
    <Grid
      container
      direction="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      gap={2}
      paddingX={2}
      paddingY={4}
      width="100%"
    >
      <h1 className="text-white text-4xl tracking-widest font-bold">
        Todo List
      </h1>

      <CreateTask />

      <ListTasks />

      <CompletedTasks />
    </Grid>
  );
};
