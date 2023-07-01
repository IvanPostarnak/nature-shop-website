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
        throw new InvalidTypeError('action.payload', 'object');
      };
      if (Object.keys(state).length != Object.keys(action.payload).length) {
        throw new CompareError('state.length', 'action.payload.length');
      }
      const newState = {...state};
      let hasOnlyOneTrue = false;
      for (let key in newState) {
        newState[key] = action.payload[key];
        if (newState[key] === true) {
          if (hasOnlyOneTrue === false) {
            hasOnlyOneTrue = true;
          } else {
            throw new ValidationError('action.payload');
          }
        }
      };
      return newState;
    }
  }
});

export const {setDevice} = deviceSlice.actions;
export default deviceSlice.reducer;