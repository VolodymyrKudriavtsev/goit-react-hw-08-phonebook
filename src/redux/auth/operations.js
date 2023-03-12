import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth-api';

export const fetchSignup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response); //? response.data.message
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response); //? response.data.message
    }
  }
);
