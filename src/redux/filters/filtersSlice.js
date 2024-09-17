import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: ''
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    }
  }
});


export const selectNameFilter = state => state.filters.filter;
export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;