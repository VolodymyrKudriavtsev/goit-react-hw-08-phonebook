import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';

const initialState = {
  items: [],
  operation: null,
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.operation = 'fetch';
        state.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.operation = 'add';
        state.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.items.unshift(payload);
      })
      .addCase(fetchAddContact.rejected, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteContact.pending, (state, action) => {
        state.operation = action.meta.arg;
        state.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (state, { payload }) => {
        state.operation = null;
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;

//Selectors
export const selectAllContacts = ({ contacts }) => contacts.items;

export const selectFilteredContacts = ({ contacts, filter }) => {
  return contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const selectOperation = ({ contacts }) => {
  const { operation, error } = contacts;
  return { operation, error };
};
