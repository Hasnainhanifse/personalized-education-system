import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// @ts-ignore
import { apiSlice } from "store/slices/apiSlice";
// @ts-ignore
import authReducer from "store/slices/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
