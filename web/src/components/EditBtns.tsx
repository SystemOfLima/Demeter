import {
  ArrowBack,
  Cancel,
  Check,
  Delete,
  Edit,
  Save,
} from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import { useTasks } from '../hooks/useTasks';
import { taskType } from '../types/tasks';

export const EditBtns = ({
  task,
  edit,
  handleToggleEdit,
}: {
  task: taskType;
  edit: boolean;
  handleToggleEdit: () => void;
}) => {
  const { completeTask, updateTaskTittle, deleteTask } = useTasks();

  if (task.completed) {
    return (
      <>
        <Button variant="text" onClick={() => completeTask(task._id)}>
          <Tooltip title="reactive task">
            <ArrowBack />
          </Tooltip>
        </Button>

        <Button variant="text" onClick={() => deleteTask(task._id)}>
          <Delete />
        </Button>
      </>
    );
  }

  if (edit) {
    return (
      <>
        <Button variant="text" onClick={() => updateTaskTittle(task._id)}>
          <Save />
        </Button>
        <Button variant="text" onClick={() => handleToggleEdit()}>
          <Cancel />
        </Button>
      </>
    );
  }

  return (
    <>
      <Button variant="text" onClick={() => completeTask(task._id)}>
        <Check />
      </Button>
      <Button variant="text" onClick={handleToggleEdit}>
        <Edit />
      </Button>
      <Button variant="text" onClick={() => deleteTask(task._id)}>
        <Delete />
      </Button>
    </>
  );
};
