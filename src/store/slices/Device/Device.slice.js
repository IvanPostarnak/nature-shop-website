import { createSlice } from "@reduxjs/toolkit";
import { setDevice } from "store/actions/setDevice/setDevice";

const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    isMobile: false,
    isTablet: false,
    isDesktop: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setDevice, (state, action) => {  
        return {...state, ...action.payload};
      })
  }
});

export default deviceSlice.reducer;