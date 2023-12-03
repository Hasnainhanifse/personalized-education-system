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
      let url = new URL(`${baseUrl}/assignment`);
      if (form && form.currentUser && form.levelType) {
        url.searchParams.set("currentUser", form.currentUser);
        url.searchParams.set("levelType", form.levelType);
      }
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

export const getSubmittedAssignments = createAsyncThunk(
  "assessment/getSubmittedAssignments",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/assignment/submittedAssignments`);

      url.searchParams.set("user", form.user);

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
        `${baseUrl}/assignment/submit`,
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

export const assignAssignmentMarks = createAsyncThunk(
  "assessment/assignAssignmentMarks",
  async (form, { rejectWithValue }) => {
    try {
      const assignmentFormData = new FormData();
      assignmentFormData.append("score", form.score);
      assignmentFormData.append("assignmentId", form.assignmentId);
      assignmentFormData.append("user", form.user);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${baseUrl}/assignment/evaluate`,
        assignmentFormData,
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

export const getCourses = createAsyncThunk(
  "assessment/getCourses",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/courses`);
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

export const enrollCourse = createAsyncThunk(
  "assessment/enrollCourse",
  async (form, { rejectWithValue }) => {
    try {
      const fileFormDdata = new FormData();
      fileFormDdata.append("user", form.user.id);
      const courseId = form.courseId;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/courses/enroll/${courseId}`);
      const { data } = await axios.post(url, fileFormDdata, config);
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

export const getArticles = createAsyncThunk(
  "assessment/getArticles",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/articles`);
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

export const getProgressReport = createAsyncThunk(
  "assessment/getProgressReport",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/progress`);
      url.searchParams.set("user", form.user);
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

export const getVideos = createAsyncThunk(
  "assessment/getVideos",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/videos`);
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
export const getRecommendedItems = createAsyncThunk(
  "assessment/getRecommendedItems",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/model/recommended`);
      url.searchParams.set("user", form.user);
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

export const trainModel = createAsyncThunk(
  "assessment/trainAIModel",
  async (form, { rejectWithValue }) => {
    const formData = new FormData();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      let url = new URL(`${baseUrl}/model/train`);
      url.searchParams.set("user", form.user);
      const { data } = await axios.post(url, formData, config);
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
