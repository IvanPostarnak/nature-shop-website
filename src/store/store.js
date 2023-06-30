import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "store/slices/Auth/Auth.slice";

const rootReducer = combineReducers({
  auth: authReducer
});

export const createReduxStore = (preloadedState) => {
  return configureStore({
    preloadedState: preloadedState,
    reducer: rootReducer
  });
};