import { createSlice } from "@reduxjs/toolkit";

const WishingSlice = createSlice({
  initialState: [],
  name: "wishingSlice",
  reducers: {
    addToWishing: (state, action) => {
      const addFinalProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (addFinalProduct) {
        return;
      } else {
        const cloneProduct = { ...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
    removeFromWishing: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});
export const { addToWishing, removeFromWishing } = WishingSlice.actions;
export default WishingSlice.reducer;
