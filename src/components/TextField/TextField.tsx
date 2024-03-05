import React, { FormEvent } from 'react';
import { Button, Input, Typography } from '@mui/joy';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

const TextField: React.FC = () => {
	const [isTextError, setTextError] = useState<boolean>(false);
	const dispatch = useDispatch();

	const validateText = (str: string) => {
		const text = str.trim();
		const isValid = text !== '' && text.length <= 40;
		setTextError(!isValid);

		return isValid;
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const taskText = (form.elements.namedItem('task') as HTMLInputElement)
			.value;

		if (validateText(taskText)) {
			dispatch(addTask(taskText));
			form.reset();
			return;
		}

		form.reset();
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<Input
				error={isTextError}
				required
				name="task"
				color="neutral"
				placeholder="Create a new task"
				variant="outlined"
				endDecorator={<Button type="submit">Add</Button>}
			/>
			{isTextError && (
				<Typography color="danger" level="title-sm">
					Please enter up to 40 characters and ensure the field is not empty.
				</Typography>
			)}
		</form>
	);
};

export default TextField;
