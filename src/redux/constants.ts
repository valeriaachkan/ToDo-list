interface statusFiltersInterface {
  all: string;
  current: string;
  completed: string;
}

export const statusFilters: statusFiltersInterface = Object.freeze({
  all: 'All',
  current: 'Current',
  completed: 'Completed',
});
