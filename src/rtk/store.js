import { configureStore } from "@reduxjs/toolkit";
import GetProductsSlice from "./slices/GetProductsSlice";
import WishingSlice from "./slices/WishingSlice";
import CardSlice from "./slices/CardSlice";

export const store = configureStore({
  reducer: {
    products: GetProductsSlice,
    wishing: WishingSlice,
    card: CardSlice,
  },
});
