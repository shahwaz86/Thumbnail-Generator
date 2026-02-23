import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../config/server";


const initialState = {
    image: null,
    history: [],
    loading: null,
    error: null
};

export const generateThumbnail = createAsyncThunk("thumbnail/generate", async({prompt, style}, {rejectWithValue}) =>{
    try{
        const {data} = await axios.post(`${serverUrl}/api/thumbnail/generate`, {prompt, style}, {withCredentials: true});
        return data.image;
    }
    catch(err){
        return rejectWithValue(err?.response?.data?.message);
    }
});

// Fetch history
export const fetchThumbnailHistory = createAsyncThunk(
  "thumbnail/history",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${serverUrl}/api/thumbnail/history`,
        { withCredentials: true }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);


const thumbnailSlice = createSlice({
    name: "thumbnail",
    initialState,
    reducers:{
        resetThumbnail: (state)=>{
            state.image = null,
            state.error = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(generateThumbnail.pending, (state,action) =>{
            state.loading = true;
            state.error = null;
        });

        builder.addCase(generateThumbnail.fulfilled, (state,action) =>{
            state.loading = false;
            state.image = action.payload
        });
        builder.addCase(generateThumbnail.rejected, (state,action) =>{
            state.loading = false;
            state.error = action.payload;
            
        });

        builder.addCase(fetchThumbnailHistory.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchThumbnailHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.history = action.payload;
      })
      builder.addCase(fetchThumbnailHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    }

});


export const {resetThumbnail} = thumbnailSlice.actions;
export default thumbnailSlice.reducer;