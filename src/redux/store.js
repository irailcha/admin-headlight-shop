import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./adverts-redux/advertsSlice";
import messageReducer from './messages-redux/messageSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    messages: messageReducer,  
  },
});


export default store;