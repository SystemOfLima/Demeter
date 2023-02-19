import { TextField } from '@mui/material';
import { useTasks } from '../hooks/useTasks';

export const TitleInput = () => {
  const { taskTitleInput } = useTasks();

  return (
    <TextField
      required
      variant="outlined"
      inputRef={taskTitleInput}
      className="bg-white rounded-lg"
    />
  );
};
