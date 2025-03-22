import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (thunkAPI) => {
    try {
      setAuthHeader();
      const response = await axios.get("/notices/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGenders = createAsyncThunk(
  "sex/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/notices/sex");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSpecies = createAsyncThunk(
  "species/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/notices/species");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchCities = createAsyncThunk(
//   "cities/fetchAll",
//   async (thunkAPI) => {
//     try {
//       const response = await axios.get("/cities");
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchCities = createAsyncThunk(
  "cities/fetchAll",
  async ({ keyword }, thunkAPI) => {
    // Принимаем keyword из аргумента
    try {
      const response = await axios.get("/cities", {
        params: {
          keyword: keyword, // Передаем keyword в параметры запроса
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const AddToFavorites = createAsyncThunk(
  "notices/addFavorites",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.post(`/notices/favorites/add/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const RemoveFromFavorites = createAsyncThunk(
  "notices/removeFavorites",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.delete(`/notices/favorites/remove/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
