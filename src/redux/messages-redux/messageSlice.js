import { createSlice } from "@reduxjs/toolkit"
import {getMessages, replyMessage, markMessageAsRead} from './operations'

const messageSlice= createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    loading: false,
    error: null
  },
  reducers: {},
extraReducers: (builder) =>
builder
 .addCase(getMessages.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(getMessages.fulfilled, (state, action) => {
    state.loading = false;
    state.messages = action.payload.reverse();
  })
  .addCase(getMessages.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  })
  .addCase(replyMessage.fulfilled, (state, action) => {
  state.loading = false;
  state.messages = state.messages.map(message => message._id === action.payload._id? action.payload : message);
  })
  .addCase(replyMessage.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
  })
  .addCase(markMessageAsRead.fulfilled, (state, action) => {
    state.loading = false;
    state.messages = state.messages.map(message => message._id === action.payload._id? {...message, isRead: true} : message);
  })

})


export const { reducer: messagesReducer } = messageSlice;
export default messageSlice.reducer;