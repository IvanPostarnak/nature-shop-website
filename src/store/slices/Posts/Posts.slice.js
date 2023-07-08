import { createSlice } from "@reduxjs/toolkit";
import { setPostsStart } from "store/actions/setPostsStart/setPostsStart";
import { setPostsStep } from "store/actions/setPostsStep/setPostsStep";
import { setPostsAmount } from "store/actions/setPostsAmount/setPostsAmount";
import { setPostsLastActivePage } from "store/actions/setPostsLastActivePage/setPostsLastActivePage";
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
          amount: {
            value: action.payload,
            status: 'success'
          }
        };
      })
      .addCase(setPostsStart, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            start: action.payload
          }
        };
      })
      .addCase(setPostsStep, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            step: action.payload
          }
        };
      })
      .addCase(setPostsLastActivePage, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            lastActivePage: action.payload
          }
        };
      })
      .addCase(fetchPostsAmount.pending, (state, action) => {
        return {
          ...state,
          amount: {
            ...state.amount,
            status: 'pending'
          }
        };
      })
      .addCase(fetchPostsAmount.fulfilled, (state, action) => {
        return {
          ...state,
          amount: {
            value: action.payload,
            status: 'success'
          }
        };
      })
  }
});

export default postsSlice.reducer;