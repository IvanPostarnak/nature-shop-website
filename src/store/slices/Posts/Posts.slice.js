import { createSlice } from "@reduxjs/toolkit";
import { setPostsStart } from "store/actions/setPostsStart/setPostsStart";
import { setPostsStep } from "store/actions/setPostsStep/setPostsStep";
import { setPostsAmount } from "store/actions/setPostsAmount/setPostsAmount";
import { setPostsActivePage } from "store/actions/setPostsActivePage/setPostsActivePage";
import { fetchPostsAmount } from "store/asyncThunks/fetchPostsAmount/fetchPostsAmount";
import { initialState } from "./posts.slice.config";

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
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
      .addCase(fetchPostsAmount.pending, (state, action) => {
        return {
          ...state,
          status: 'loading'
        }
      })
      .addCase(fetchPostsAmount.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'idle',
          amount: action.payload
        }
      })
  }
});

export default postsSlice.reducer;