import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "store/slices/Auth/Auth.slice";
import deviceReducer from "./slices/Device/Device.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  device: deviceReducer
});

export const createReduxStore = (preloadedState) => {
  return configureStore({
    preloadedState: preloadedState,
    reducer: rootReducer
  });
};