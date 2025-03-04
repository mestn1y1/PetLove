import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const fetchFriends = createAsyncThunk(
  "friends/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/friends");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
