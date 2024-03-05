import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

interface FilterState {
  status: string;
}

const initialState: FilterState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
