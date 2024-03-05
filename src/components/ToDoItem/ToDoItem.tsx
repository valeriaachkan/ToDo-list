import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, IconButton, ListItemContent, Typography } from '@mui/joy';
import { Delete } from '@mui/icons-material';
import { deleteTask, switchTaskStatus, Task } from '../../redux/tasksSlice';

interface ToDoItemProps {
  task: Task;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleStatusToggle = () => dispatch(switchTaskStatus(task.id));

  return (
    <>
      <ListItemContent sx={{ display: 'flex', gap: '15px' }}>
        <Checkbox
          variant="outlined"
          checked={task.completed}
          onClick={handleStatusToggle}
        />
        <Typography
          onClick={handleStatusToggle}
          level="title-md"
          sx={{ cursor: 'pointer' }}
        >
          {task.text}
        </Typography>
      </ListItemContent>
      <IconButton
        size="sm"
        variant="plain"
        aria-label="delete task button"
        onClick={handleDelete}
      >
        <Delete />
      </IconButton>
    </>
  );
};

export default ToDoItem;
