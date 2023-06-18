import { createSlice } from '@reduxjs/toolkit';

export const phonebookState = {
  contacts: [],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addContacts, removeContact, setFilter } = phonebookSlice.actions;
