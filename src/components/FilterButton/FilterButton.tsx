import { Radio } from '@mui/joy';
import React from 'react';

type FilterButtonProps = {
  type: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({ type }) => {
  return (
    <Radio
      key={type}
      color="neutral"
      value={type}
      disableIcon
      label={type}
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
  );
};

export default FilterButton;
