import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentUser, loginSuccess, logoutSuccess } from './authSlice';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const { keyPattern } = error.response.data;
        if (keyPattern && keyPattern.email) {
          throw new Error('This email address is already registered.');
        }
      }
      throw error;
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const token = state.auth.token;  // Отримуємо токен з Redux
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      await axios.post('/users/logout');
      delete axios.defaults.headers.common.Authorization;
      dispatch(logoutSuccess());
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    if (!token) {
      return;
    }

    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
  }
);

export const getCurrentUserThunk = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.auth.token;

  if (!token) {
    console.warn('No token found. User cannot be fetched.');
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

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    const response = await axios.post('/users/login', credentials);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(loginSuccess(response.data));
    return response.data;
  }
);

