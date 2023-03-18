import { createSlice } from '@reduxjs/toolkit';

import {
  fetchSignup,
  fetchLogin,
  fetchCurrent,
  fetchLogout,
} from './operations';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
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
        state.isLoggedIn = true;
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
        state.isLoggedIn = true;
      })
      .addCase(fetchLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrent.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrent.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrent.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.token = '';
        state.error = payload;
      })
      .addCase(fetchLogout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(fetchLogout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

// SELECTORS
export const selectUserInfo = ({ auth }) => auth.user;

export const selectIsLoading = ({ auth }) => auth.isLoading;

export const selectAuth = ({ auth }) => {
  const { isLoggedIn, token } = auth;
  return { isLoggedIn, token };
};
