// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { StoreConstants } from "features/store-constants";
import { getAllQuizzes } from "./assessmentActions";

// initialize token from local storage
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  loading: false,
  data: null,
  error: null,
  success: false,
};

const assessmentSlice = createSlice({
  name: StoreConstants.Assessment,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllQuizzes.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.success = true;
      })
      .addCase(getAllQuizzes.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default assessmentSlice.reducer;
