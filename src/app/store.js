import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import WiselistReducer from '../features/wiseSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    Wiselist:  WiselistReducer,
  },
});

