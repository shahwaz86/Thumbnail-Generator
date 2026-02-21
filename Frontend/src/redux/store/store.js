import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice';
import thumbnailReducer from "../slice/thumbnailSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    thumbnail: thumbnailReducer
  },
});

