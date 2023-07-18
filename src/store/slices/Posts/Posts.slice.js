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
import { setPostsFilterSearchQuery } from "store/actions/setPostsFilterSearchQuery/setPostsFilterSearchQuery";
import { setPostsFilterLanguageId } from "store/actions/setPostsFilterLanguageId/setPostsFilterLanguageId";

import { initialState } from "./posts.slice.config";

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      // pagination.amount
      .addCase(setPostsAmount, (state, action) => {
        return {
          ...state,
          amount: {
            value: action.payload,
            status: 'success'
          }
        };
      })
      
      // paginations.start
      .addCase(setPostsStart, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            start: action.payload
          }
        };
      })

      // pagination.step
      .addCase(setPostsStep, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            step: action.payload
          }
        };
      })

      // pagination.lastActivePage
      .addCase(setPostsLastActivePage, (state, action) => {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            lastActivePage: action.payload
          }
        };
      })

      // pagination amount
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

      // active post
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

      // next post
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

      // prev post
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

      // last visited
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

      // filter.searchQuery
      .addCase(setPostsFilterSearchQuery, (state, action) => {
        return {
          ...state,
          filter: {
            ...state.filter,
            searchQuery: action.payload
          }
        }
      })

      // filter.languageId
      .addCase(setPostsFilterLanguageId, (state, action) => {
        return {
          ...state,
          filter: {
            ...state.filter,
            languageId: action.payload
          }
        }
      })
  }
});

export default postsSlice.reducer;