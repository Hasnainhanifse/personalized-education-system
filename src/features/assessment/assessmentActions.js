// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "http://localhost:3000/api/v1";
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const getAllQuizzes = createAsyncThunk(
  "assessment/getAllQuiz",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${baseUrl}/quiz`, config);
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data) {
        if (error.response.status === 404) {
          return rejectWithValue(error.response.statusText);
        }
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const submitQuiz = createAsyncThunk(
  "assessment/submitQuiz",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(`${baseUrl}/quiz/submit`, form, config);
      return data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data) {
        if (error.response.status === 404) {
          return rejectWithValue(error.response.statusText);
        }
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
