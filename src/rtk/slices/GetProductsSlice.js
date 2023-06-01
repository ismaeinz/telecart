import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "getProductSlice/ProductSlice",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const resToJson = await res.json();
    return resToJson;
  }
);
const getProductsSlice = createSlice({
  initialState: [],
  name: "getProductsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = getProductsSlice.actions;

export default getProductsSlice.reducer;
