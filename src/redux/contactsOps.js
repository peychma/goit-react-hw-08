import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://660e7b58356b87a55c4f2f37.mockapi.io/";

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

export const addContact = createAsyncThunk("contacts/addContact",
    async (value, thunkAPI) => {
        try {
            const response = await axios.post("contacts", value);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (id, thunkAPI) => {
  try {
    await axios.delete(`contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

