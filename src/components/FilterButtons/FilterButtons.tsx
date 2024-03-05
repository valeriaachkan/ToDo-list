import React from 'react';
import { RadioGroup, Radio, Badge, Box } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';
import { selectStatusFilter, selectTaskCount } from '../../redux/selectors';

const FilterButtons: React.FC = () => {
	const filter = useSelector(selectStatusFilter);
	const taskCounter = useSelector(selectTaskCount);
	const dispatch = useDispatch();

	const handleChange = (status: string) => {
		dispatch(setStatusFilter(status));
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 2,
				justifyContent: 'flex-end',
				mt: 2,
			}}
		>
			<RadioGroup
				orientation="horizontal"
				aria-labelledby="segmented-controls-example"
				name="filter"
				value={filter}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleChange(e.target.value)
				}
				sx={{
					minHeight: 34,
					padding: '4px',
					borderRadius: '7px',
					bgcolor: 'neutral.softBg',
					gap: '15px',
					'--RadioGroup-gap': '5px',
					'--Radio-actionRadius': '5px',
				}}
			>
				<Radio
					key="All"
					color="neutral"
					value="All"
					disableIcon
					label="All"
					variant="plain"
					sx={{
						px: 2,
						alignItems: 'center',
					}}
					slotProps={{
						action: ({ checked }) => ({
							sx: {
								...(checked && {
									bgcolor: 'background.surface',
									boxShadow: 'sm',
									'&:hover': {
										bgcolor: 'background.surface',
									},
								}),
							},
						}),
					}}
				/>
				<Badge badgeContent={taskCounter.current}>
					<Radio
						key="Current"
						color="neutral"
						value="Current"
						disableIcon
						label="Current"
						variant="plain"
						sx={{
							px: 2,
							alignItems: 'center',
						}}
						slotProps={{
							action: ({ checked }) => ({
								sx: {
									...(checked && {
										bgcolor: 'background.surface',
										boxShadow: 'sm',
										'&:hover': {
											bgcolor: 'background.surface',
										},
									}),
								},
							}),
						}}
					/>
				</Badge>
				<Badge badgeContent={taskCounter.completed}>
					<Radio
						key="Completed"
						color="neutral"
						value="Completed"
						disableIcon
						label="Completed"
						variant="plain"
						sx={{
							px: 2,
							alignItems: 'center',
						}}
						slotProps={{
							action: ({ checked }) => ({
								sx: {
									...(checked && {
										bgcolor: 'background.surface',
										boxShadow: 'sm',
										'&:hover': {
											bgcolor: 'background.surface',
										},
									}),
								},
							}),
						}}
					/>
				</Badge>
			</RadioGroup>
		</Box>
	);
};

export default FilterButtons;
