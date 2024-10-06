import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentUser } from './authSlice';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    const response = await axios.post('/users/login', credentials);
    return response.data;
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => {
    await axios.post('/users/logout');
  }
);

export const getCurrentUserThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;

  if (!token) {
    return;
  }

  try {
    const response = await axios.get('/users/current', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(setCurrentUser(response.data));
  } catch (error) {
    console.error('Error fetching current user:', error);
  }
};

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
      return;
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.get('/users/current');
    return response.data;
  }
);