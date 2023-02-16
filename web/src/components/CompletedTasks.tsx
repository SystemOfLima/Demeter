import { Grid } from '@mui/material';
import { Item } from './Item';
import { useEffect, useState } from 'react';
import { axios } from '../utils/axios';

export const CompletedTasks = () => {
  const [tasksCompleted, setTasksCompleted] = useState([]);

  useEffect(() => {
    axios.get('/completed').then((response) => {
      setTasksCompleted(response.data);
    });
  }, []);

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

      {tasksCompleted.map(({ title, completed, _id }) => (
        <Item
          title={title}
          completed={!!completed}
          key={Math.random() + _id}
          id={_id}
        />
      ))}
    </Grid>
  );
};
