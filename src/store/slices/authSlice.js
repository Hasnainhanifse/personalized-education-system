const { createSlice } = require("@reduxjs/toolkit");
// @ts-ignore
const { StoreConstants } = require("store/store-constants");

const authSlice = createSlice({
  name: StoreConstants.Auth,
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log("state:", state);
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
