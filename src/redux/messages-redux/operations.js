import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getMessages = createAsyncThunk('messages/getMessages', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://backend-headlight-shop.vercel.app/api/messages/');
    
    if (!response.data.success) {
      return rejectWithValue(response.data.message || "Помилка отримання повідомлень");
    }

    return response.data.data; 
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const markMessageAsRead= createAsyncThunk('messages/markMessageAsRead', async (advertId, { rejectWithValue }) =>{
  try {
    const response = await axios.patch(`https://backend-headlight-shop.vercel.app/api/messages/${advertId}/read`);
    
    if (!response.data.success) {
      return rejectWithValue(response.data.message || "Помилка змінити статус повідомлення");
    }
    return response.data;
    
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  
}
})
 
export const replyMessage=createAsyncThunk('messages/replyMessage', async()=>{

  try{
    const response=await axios.post(`https://backend-headlight-shop.vercel.app/api/messages/reply`, {message: 'Reply message'});
    return response.data;
  }
  catch(error){
    throw new Error(error.message)
  }
})