import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;

export const selectCurrentUser = (state) => state.auth;
export const selectAuthLoading = (state) => state.auth.loading;
