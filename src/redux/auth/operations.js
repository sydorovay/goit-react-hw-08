import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentUser, loginSuccess, logoutSuccess } from './slice';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Реєстрація
export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error; 
    }
  }
);

// Логін
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      dispatch(loginSuccess(response.data));
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error; 
    }
  }
);

// Логаут
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const token = state.auth.token;

    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        await axios.post('/users/logout');
        dispatch(logoutSuccess());
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        delete axios.defaults.headers.common.Authorization;
      }
    }
  }
);

// Оновлення даних користувача
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
      throw error;
    }
  }
);

// Отримання поточного користувача
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

// Функція для отримання поточного користувача з локального сховища
export const fetchCurrentUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found.'); 
    }

    try {
        const response = await axios.get('/users/current', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error);
        throw error; 
    }
};