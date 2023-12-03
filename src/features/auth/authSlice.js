// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  userLogin,
  updateProfile,
  getUserProfile,
} from "./authActions";
import { StoreConstants } from "features/store-constants";

// initialize token from local storage
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  loading: false,
  user,
  token,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: StoreConstants.Auth,
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.success = true; // registration successful
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      // update user
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.success = true;
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      // get user profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.success = true;
      })
      .addCase(getUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      });
  },
});
export const { logout, clearErrors } = authSlice.actions;
export default authSlice.reducer;
