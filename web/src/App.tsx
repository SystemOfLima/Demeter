import { Container } from '@mui/material';
import { DashboardTasks } from './components/DashboardTasks';
import { TaskProvider } from './contexts/tasksContext';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <TaskProvider>
        <DashboardTasks />
      </TaskProvider>
    </Container>
  );
};
