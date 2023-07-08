import { createSlice } from "@reduxjs/toolkit";
import { setPostsStart } from "store/actions/setPostsStart/setPostsStart";
import { setPostsStep } from "store/actions/setPostsStep/setPostsStep";
import { setPostsAmount } from "store/actions/setPostsAmount/setPostsAmount";
import { setPostsActivePage } from "store/actions/setPostsActivePage/setPostsActivePage";

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    amount: 0,
    start: 0,
    step: 10,
    activePage: 1
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(setPostsAmount, (state, action) => {
        return {
          ...state,
          amount: action.payload
        };
      })
      .addCase(setPostsStart, (state, action) => {
        return {
          ...state,
          start: action.payload
        };
      })
      .addCase(setPostsStep, (state, action) => {
        return {
          ...state,
          step: action.payload
        };
      })
      .addCase(setPostsActivePage, (state, action) => {
        return {
          ...state,
          activePage: action.payload
        };
      })
  }
});

export default postsSlice.reducer;