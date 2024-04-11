import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (value, thunkAPI) => {
    try {
      const response = await axios.post("contacts", value);
      console.log('addContact response:', response);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      console.error('addContact error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`contacts/${id}`);
      console.log('deleteContact response:', id);
      thunkAPI.dispatch(fetchContacts());
      return id;
    } catch (error) {
      console.error('deleteContact error:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
