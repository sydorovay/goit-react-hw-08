import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading; // Селектор для стану завантаження
export const selectError = state => state.contacts.error; // Селектор для помилки

export const selectFilter = state => state.filters.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!contacts || !filter) return []; 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);