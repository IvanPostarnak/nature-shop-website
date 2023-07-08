import { combineReducers, configureStore } from "@reduxjs/toolkit";
import deviceReducer from "./slices/Device/Device.slice";
import pagesReducer from "./slices/Pages/Pages.slice";
import postsReducer from "./slices/Posts/Posts.slice";

const rootReducer = combineReducers({
  device: deviceReducer,
  pages: pagesReducer,
  posts: postsReducer
});

export const createReduxStore = (preloadedState) => {
  return configureStore({
    preloadedState: preloadedState,
    reducer: rootReducer
  });
};