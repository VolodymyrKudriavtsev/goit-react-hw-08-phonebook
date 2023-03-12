import { createSlice } from '@reduxjs/toolkit';

import { fetchSignup, fetchLogin } from './operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSignup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSignup.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(fetchSignup.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

// SELECTORS
export const selectIsLogin = ({ auth }) => auth.isLogin;

export const selectUserInfo = ({ auth }) => auth.user;