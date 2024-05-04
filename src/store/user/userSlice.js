import { createAsyncThunk, createSlice, miniSerializeError } from "@reduxjs/toolkit";

import axios from "axios";


const API_URL = 'http://51.20.18.88/'

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (payload,thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}accounts/login/`, payload);
      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);

      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
})


export const refreshAccessToken = createAsyncThunk(
  'users/refreshAccessToken',
  async (_, thunkAPI) => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const res = await axios.post(`${API_URL}/accounts/refresh/`, { refresh: refreshToken });
      // Обновляем access токен в localStorage
      localStorage.setItem('accessToken', res.data.access);
      return res.data.access;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.toJSON());
    }
});



const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    accessToken: localStorage.getItem('accessToken') || null,
    isLoading: false,
    formType: "login",
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка успешной авторизации
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
      })
      // Обработка состояния загрузки
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      // Обработка ошибки авторизации
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        // Дополнительная логика обработки ошибки
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        // Обновляем access токен в состоянии
        state.accessToken = action.payload;
        // Обновляем access токен в localStorage
        localStorage.setItem('accessToken', action.payload);
      })
      // Обработка ошибки обновления access токена
      .addCase(refreshAccessToken.rejected, (state) => {
        // Дополнительная логика обработки ошибки
      });
  },
});

export const { setCurrentUser, setAccessToken } = userSlice.actions;

export default userSlice.reducer;