// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { StoreConstants } from "features/store-constants";
import {
  getAllQuizzes,
  submitAssignment,
  submitQuiz,
  getCourses,
  getAssignments,
  enrollCourse,
  getArticles,
  getProgressReport,
  getVideos,
  getRecommendedItems,
  trainModel,
  getSubmittedAssignments,
  assignAssignmentMarks,
} from "./assessmentActions";

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
  courses: null,
  userCourse: null,
  articles: null,
  progressReport: null,
  submittedAssignments: null,
  videos: null,
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
      //get all submitted assignments
      .addCase(getSubmittedAssignments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubmittedAssignments.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.submittedAssignments = payload.result;
      })
      .addCase(getSubmittedAssignments.rejected, (state, { payload }) => {
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
      })
      //get courses
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.courses = payload;
      })
      .addCase(getCourses.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      //enroll course
      .addCase(enrollCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(enrollCourse.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userCourse = payload;
      })
      .addCase(enrollCourse.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      //get articles
      .addCase(getArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.articles = payload;
      })
      .addCase(getArticles.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      //get progress report
      .addCase(getProgressReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProgressReport.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.progressReport = payload;
      })
      .addCase(getProgressReport.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // get videos
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideos.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.videos = payload;
      })
      .addCase(getVideos.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // get recommended items
      .addCase(getRecommendedItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecommendedItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.assignment = payload.recommendedAssignment;
        state.quiz = payload.recommendedQuiz;
      })
      .addCase(getRecommendedItems.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // train model
      .addCase(trainModel.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(trainModel.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(trainModel.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      })
      // assign assignment marks
      .addCase(assignAssignmentMarks.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(assignAssignmentMarks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(assignAssignmentMarks.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.success = false;
      });
  },
});

export default assessmentSlice.reducer;
