import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const getProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (getProduct) {
        getProduct.quantity += 1;
      } else {
        const findProduct = { ...action.payload, quantity: 1 };
        state.push(findProduct);
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clear } = CartSlice.actions;
export default CartSlice.reducer;
