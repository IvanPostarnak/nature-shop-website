import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: 'device',
  initialState: {
    isMobile: false,
    isTablet: false,
    isDesktop: true
  },
  reducers: {
    setDevice: (state, action) => {
      if (action.payload instanceof Object === false) {
        throw new Error(`action.payload of setDevice() action should be an object`);
      };
      const newState = {...state};
      if (Object.keys(newState).length != Object.keys(action.payload).length) throw new Error('action.payload has to have the same length as the state')
      let hasOnlyOneTrue = false;
      for (let key in newState) {
        newState[key] = action.payload[key];
        if (newState[key] === true) {
          if (hasOnlyOneTrue === false) {
            hasOnlyOneTrue = true;
          } else {
            throw new Error(`action.payload of setDevice() action should have only one equal to 'true' property`);
          }
        }
      };
      return newState;
    }
  }
});

export const {setDevice} = deviceSlice.actions;
export default deviceSlice.reducer;