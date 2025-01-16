import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wiselistItems: [],
  totalAmount: 0,
};

const wiseSlice = createSlice({
  name: 'Wiselist',
  initialState,
  reducers: {
    addToWiseList: (state, action) => {
      const existingItem = state.wiselistItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.wiselistItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },
    removeFromWiseList: (state, action) => {
      const itemIndex = state.wiselistItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.totalAmount -= state.wiselistItems[itemIndex].price * state.wiselistItems[itemIndex].quantity;
        state.wiselistItems.splice(itemIndex, 1);
      }
    },
  },
});

export const {  addToWiseList, removeFromWiseList } = wiseSlice.actions;
export default wiseSlice.reducer;
