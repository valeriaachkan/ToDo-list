import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export interface Task {
	id: string;
	text: string;
	completed: boolean;
}

interface TasksState {
	list: Task[];
}

const initialState: TasksState = { list: [] };

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: {
			reducer(state, action: PayloadAction<Task>) {
				state.list.push(action.payload);
			},
			prepare(text: string) {
				const newTask = {
					text,
					id: nanoid(),
					completed: false,
				};

				return {
					payload: newTask,
				};
			},
		},
		switchTaskStatus(state, action: PayloadAction<string>) {
			const index = state.list.findIndex((task) => task.id === action.payload);
			const task = state.list[index];
			const switchedTask = { ...task, completed: !task.completed };

			state.list.splice(index, 1, switchedTask);
		},
		deleteTask(state, action: PayloadAction<string>) {
			const index = state.list.findIndex((task) => task.id === action.payload);
			state.list.splice(index, 1);
		},
	},
});

export const { addTask, switchTaskStatus, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
