import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactsThunk,
  getContactsThunk,
  postContactsThunk,
} from './phonebookThunk';

const phonebookState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  // ответ
  state.contacts.items = action.payload;
  state.contacts.error = '';
};
const handleFulfilledPost = (state, action) => {
  state.isLoading = false;
  state.contacts.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.contacts.items = state.contacts.items.filter(
    el => el.id !== action.payload.id
  );
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)

      .addCase(postContactsThunk.pending, handlePending)
      .addCase(postContactsThunk.fulfilled, handleFulfilledPost)
      .addCase(postContactsThunk.rejected, handleRejected)

      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addCase(deleteContactsThunk.rejected, handleRejected);
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addContacts, removeContact, setFilter } = phonebookSlice.actions;
