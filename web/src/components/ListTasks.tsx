import { Grid } from '@mui/material';
import { Item } from './Item';
import { useEffect, useState } from 'react';
import { axios } from '../utils/axios';

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/').then((response) => {
      setTasks(response.data);
    });
  }, []);

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

      {tasks.map(({ title, _id }) => (
        <Item title={title} key={`${Math.random()}`} id={_id} />
      ))}
    </Grid>
  );
};
