import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload;
    },
    registerSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutSuccess(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { registerSuccess, loginSuccess, logoutSuccess, refreshSuccess, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;