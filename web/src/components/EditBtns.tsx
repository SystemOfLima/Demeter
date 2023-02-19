import { Button } from '@mui/material';
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
  const { completeTask, updateTaskTittle } = useTasks();

  if (task.completed) {
    return (
      <Button variant="text" onClick={() => completeTask(task._id)}>
        Voltar
      </Button>
    );
  }
  if (edit) {
    return (
      <Button variant="text" onClick={() => updateTaskTittle(task._id)}>
        Salvar
      </Button>
    );
  }
  return (
    <>
      <Button variant="text" onClick={handleToggleEdit}>
        Editar
      </Button>
      <Button variant="text" onClick={() => completeTask(task._id)}>
        Concluir
      </Button>
    </>
  );
};
