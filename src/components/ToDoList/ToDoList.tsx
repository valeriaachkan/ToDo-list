import React from 'react';
import { Box, ListItem, Stack, Divider, Typography } from '@mui/joy';
import ToDoItem from '../ToDoItem';
import { useSelector } from 'react-redux';
import { selectStatusFilter, selectVisibleTasks } from '../../redux/selectors';
import { Task } from '../../redux/tasksSlice';

const ToDoList: React.FC = () => {
  const tasks: Task[] = useSelector(selectVisibleTasks);
  const filter: string = useSelector(selectStatusFilter);

  return (
    <Box sx={{ p: 2, mt: 2 }}>
      <Stack spacing={2} divider={<Divider orientation="horizontal" />}>
        {tasks.length &&
          tasks.map((task) => (
            <ListItem key={task.id}>
              <ToDoItem task={task} />
            </ListItem>
          ))}
        {tasks.length === 0 && filter === 'All' && (
          <>
            <Typography
              level="title-lg"
              sx={{
                opacity: '60%',
                textAlign: 'center',
              }}
            >
              Welcome aboard!
            </Typography>
            <Typography
              level="title-md"
              sx={{
                opacity: '50%',
                textAlign: 'center',
              }}
            >
              Your task list is currently empty – the perfect canvas for your
              upcoming achievements.
              <br />
              Let's add your first task and kickstart your productivity!
            </Typography>
          </>
        )}
        {tasks.length === 0 && filter === 'Current' && (
          <Typography
            level="title-md"
            sx={{ opacity: '50%', textAlign: 'center' }}
          >
            Great job! You've completed all your tasks.
            <br />
            Ready for your next challenge?
          </Typography>
        )}
        {tasks.length === 0 && filter === 'Completed' && (
          <Typography
            level="title-md"
            sx={{ opacity: '50%', textAlign: 'center' }}
          >
            No completed tasks yet! Ready to start ticking off achievements?
            <br />
            Add your first task now!
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default ToDoList;
