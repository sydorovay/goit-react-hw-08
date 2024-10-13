import { createSelector } from '@reduxjs/toolkit';

// Селектор для отримання фільтра з Redux store
const selectFilter = state => state.filters.filter;

// Селектор для отримання нормалізованого значення фільтра
export const selectNormalizedFilter = createSelector(
  [selectFilter],
  filter => filter ? filter.toLowerCase() : ''
);