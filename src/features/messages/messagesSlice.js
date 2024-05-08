import { fetchMessages } from "./actionCreator";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isLoading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false
        state.messages = action.payload.messages
        state.error = ''
      })
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { messagesFetching, messagesFetchingSuccess, messagesFetchingError } = messagesSlice.actions;

export default messagesSlice.reducer
