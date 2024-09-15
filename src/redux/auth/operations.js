import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлення базової URL для всіх запитів
axios.defaults.baseURL = 'https://connections-api.goit.global';

// Додає JWT токен в заголовки запитів
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Видаляє JWT токен із заголовків запитів
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Операція реєстрації користувача
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', credentials);
    setAuthHeader(response.data.token);
    return response.data; // Повертає дані користувача та токен
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операція логіну користувача
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', credentials);
    setAuthHeader(response.data.token);
    return response.data; // Повертає дані користувача та токен
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операція виходу користувача
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операція оновлення даних користувача за токеном
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    // Якщо токену немає, завершуємо без запиту
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('/users/current');
    return response.data; // Повертає дані користувача
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});