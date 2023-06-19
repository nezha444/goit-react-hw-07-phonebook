import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContactsFromApi,
  getContactsFromApi,
  postContactsFromApi,
} from 'components/api';

export const getContactsThunk = createAsyncThunk('getContacts', async () => {
  return await getContactsFromApi();
});

export const postContactsThunk = createAsyncThunk(
  'postContacts',
  async contact => {
    return await postContactsFromApi(contact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async id => {
    return await deleteContactsFromApi(id);
  }
);
