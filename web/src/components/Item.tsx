import { Grid, Button } from '@mui/material';
import { taskType } from '../types/tasks';
import { useTasks } from '../hooks/useTasks';
import { useState } from 'react';
import { TitleInput } from './TitleInput';
import { EditBtns } from './EditBtns';

export const Item = ({ task }: { task: taskType }) => {
  const { deleteTask } = useTasks();

  const [edit, setEdit] = useState(false);

  const handleToggleEdit = () => setEdit((state) => !state);

  return (
    <Grid
      container
      direction="row"
      width="100%"
      bgcolor="white"
      borderRadius={2}
      paddingY={1}
      paddingX={2}
      alignItems="center"
      justifyContent="space-between"
      sx={
        task.completed
          ? {
              opacity: 0.4,
              '& h3': { textDecoration: 'line-through' },
            }
          : {}
      }
    >
      {edit ? <TitleInput /> : <h3>{task.title}</h3>}

      <Grid item>
        <EditBtns task={task} edit={edit} handleToggleEdit={handleToggleEdit} />
      </Grid>
    </Grid>
  );
};
