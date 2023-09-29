// @ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import assessmentReducer from "features/assessment/assessmentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    assessment: assessmentReducer,
  },
});
export default store;

export const selectAuthLoading = (state) => state.auth.loading;
export const selectCurrentUser = (state) => state.auth;
export const selectAssessmentLoading = (state) => state.assessment.loading;
export const selectAllQuiz = (state) => state.assessment;
