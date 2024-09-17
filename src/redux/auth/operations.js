import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (token === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const response = await axios.get('/users/current', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});