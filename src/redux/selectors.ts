import { RootState } from './store';
import { statusFilters } from './constants';

export const selectTasks = (state: RootState) => state.tasks.list;
export const selectStatusFilter = (state: RootState) => state.filter.status;

export const selectVisibleTasks = (state: RootState) => {
  const tasks = selectTasks(state);
  const statusFilter = selectStatusFilter(state);

  switch (statusFilter) {
    case statusFilters.current:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const selectTaskCount = (state: RootState) => {
  const tasks = selectTasks(state);

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.current += 1;
      }
      return count;
    },
    { current: 0, completed: 0 }
  );
};
