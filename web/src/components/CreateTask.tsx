import { Grid, Button } from '@mui/material';
import { useTasks } from '../hooks/useTasks';
import { TitleInput } from './TitleInput';

export const CreateTask = () => {
  const { createTask } = useTasks();

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
      <h1 className="text-white text-lg tracking-wide font-bold">
        Create a new task
      </h1>

      <TitleInput />

      <Button variant="contained" onClick={() => createTask()}>
        Salvar
      </Button>
    </Grid>
  );
};
