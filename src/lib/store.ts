import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";

export const store = configureStore({
  reducer: { products },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
