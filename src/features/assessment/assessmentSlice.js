// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { StoreConstants } from "features/store-constants";
import {
  getAllQuizzes,
  submitAssignment,
  submitQuiz,
} from "./assessmentActions";
import { getAssignments } from "./assessmentActions";

// initialize token from local storage
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  loading: false,
  quiz: null,
  assignment: null,
  error: null,
  success: false,
};

const assessmentSlice = createSlice({
  name: StoreConstants.Assessment,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get all quizes
      .addCase(getAllQuizzes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllQuizzes.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.quiz = payload;
        state.success = true;
      })
      .addCase(getAllQuizzes.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //submit quiz
      .addCase(submitQuiz.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitQuiz.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitQuiz.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //get all assignments
      .addCase(getAssignments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAssignments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.assignment = payload;
      })
      .addCase(getAssignments.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //submit assignment
      .addCase(submitAssignment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAssignment.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitAssignment.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default assessmentSlice.reducer;
