import { createSelector } from 'reselect';

// Cелектор для отримання всіх контактів
const selectContacts = state => state.contacts.items;

// Cелектор для отримання фільтру
const selectFilter = state => state.contacts.filter;

// Мемоізований селектор для фільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);