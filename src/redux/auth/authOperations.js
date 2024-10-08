import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentUser, loginSuccess, logoutSuccess } from './authSlice';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    const response = await axios.post('/users/signup', credentials);
    return response.data;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    const response = await axios.post('/users/login', credentials);
    // Зберігаємо токен у заголовках для подальших запитів
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    dispatch(loginSuccess(response.data));
    return response.data;
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await axios.post('/users/logout');
    // Видаляємо токен з заголовків після виходу
    delete axios.defaults.headers.common.Authorization;
    dispatch(logoutSuccess());
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



