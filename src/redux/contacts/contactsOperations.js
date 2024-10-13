import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token');
  }

  try {
    const response = await axios.get('/contacts', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});

// Add New Contact
export const addNewContact = createAsyncThunk('contacts/add', async (contact, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token');
  }

  try {
    const response = await axios.post('/contacts', contact, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error);
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});

// Delete Contact
export const deleteContact = createAsyncThunk('contacts/delete', async (contactId, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;

  if (!token) {
    return thunkAPI.rejectWithValue('No token');
  }

  try {
    await axios.delete(`/contacts/${contactId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { id: contactId };
  } catch (error) {
    console.error('Error deleting contact:', error);
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data : error.message
    );
  }
});