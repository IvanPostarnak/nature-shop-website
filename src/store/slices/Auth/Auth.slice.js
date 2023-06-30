import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false
  },
  reducers: {
    setAuth: (state, action) => {
      return {...state, value: Boolean(action.payload)}
    },
    toggleAuth: (state) => {
      return {...state, value: !state?.value}
    }
  }
});

export const { setAuth, toggleAuth } = authSlice.actions;
export default authSlice.reducer;