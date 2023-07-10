import { createSlice } from "@reduxjs/toolkit";
import { setPostsStart } from "store/actions/setPostsStart/setPostsStart";
import { setPostsStep } from "store/actions/setPostsStep/setPostsStep";
import { setPostsAmount } from "store/actions/setPostsAmount/setPostsAmount";
import { setPostsLastActivePage } from "store/actions/setPostsLastActivePage/setPostsLastActivePage";
import { fetchPostsAmount } from "store/asyncThunks/fetchPostsAmount/fetchPostsAmount";
import { setActivePost } from "store/actions/setActivePost/setActivePost";
import { setNextPost } from "store/actions/setNextPost/setNextPost";
import { setPrevPost } from "store/actions/setPrevPost/setPrevPost";
import { setPostsLastVisited } from "store/actions/setPostsLastVisited/setPostsLastVisited";

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
      .addCase(setActivePost, (state, action) => {
        return {
          ...state,
          trident: {
            ...state.trident,
            active: {
              id: action.payload.post_id,
              title: action.payload.title
            }
          }
        };
      })
      .addCase(setNextPost, (state, action) => {
        return {
          ...state,
          trident: {
            ...state.trident,
            next: {
              id: action.payload.post_id,
              title: action.payload.title
            }
          }
        };
      })
      .addCase(setPrevPost, (state, action) => {
        return {
          ...state,
          trident: {
            ...state.trident,
            prev: {
              id: action.payload.post_id,
              title: action.payload.title
            }
          }
        };
      })
      .addCase(setPostsLastVisited, (state, action) => {
        const isInArray = state.session.lastVisited.includes(action.payload);
        if (isInArray) {
          return state;
        } else {
          const currentLength = state.session.lastVisited.length;
          const savedArray = currentLength === 10 ? state.session.lastVisited.slice(0, -1) : state.session.lastVisited;
          return {
            ...state,
            session: {
              ...state.session,
              lastVisited: [action.payload, ...savedArray]
            }
          }
        }
      })
  }
});

export default postsSlice.reducer;