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

export const getAssignments = createAsyncThunk(
  "assessment/getAssignments",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/assigment`);
      url.searchParams.set("currentUser", form.currentUser);
      url.searchParams.set("levelType", form.levelType);

      const { data } = await axios.get(url, config);
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

export const submitAssignment = createAsyncThunk(
  "assessment/submitAssignment",
  async (form, { rejectWithValue }) => {
    try {
      const fileFormDdata = new FormData();
      fileFormDdata.append("file", form.file);
      fileFormDdata.append("user", form.user);
      fileFormDdata.append("assignmentId", form.assignmentId);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${baseUrl}/assigment/submit`,
        fileFormDdata,
        config
      );
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
