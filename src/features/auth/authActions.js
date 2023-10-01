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

export const registerUser = createAsyncThunk(
  "auth/register",
  async (form, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${baseUrl}/users/register`, form, config);
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

export const userLogin = createAsyncThunk(
  "auth/login",
  async (form, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(`${baseUrl}/users/login`, form, config);
      // store user's token in local storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      // return custom error message from API if any
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

export const updateProfile = createAsyncThunk(
  "auth/profile",
  async (form, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.put(
        `${baseUrl}/users/${user.id}`,
        form,
        config
      );
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      // return custom error message from API if any
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
