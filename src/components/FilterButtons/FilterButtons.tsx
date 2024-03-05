import React from 'react';
import { RadioGroup, Box } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';
import { selectStatusFilter } from '../../redux/selectors';
import { statusFilters } from '../../redux/constants';
import CountBadge from '../CountBadge';
import FilterButton from '../FilterButton/FilterButton';

const filterTypes: string[] = Object.values(statusFilters);

const FilterButtons: React.FC = () => {
  const filter = useSelector(selectStatusFilter);
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
        {filterTypes.map((type) => (
          <CountBadge type={type} key={type}>
            <FilterButton type={type} />
          </CountBadge>
        ))}
      </RadioGroup>
    </Box>
  );
};

export default FilterButtons;
