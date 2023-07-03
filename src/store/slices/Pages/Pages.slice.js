import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    active: 'Home'
  },
  reducers: {
    setActivePage: (state, action) => {
      if (!action.payload) {
        throw new NoDataError('setActivePage(): action.payload');
      };

      if (typeof action.payload != 'string') {
        throw new InvalidTypeError('setActivePage(): action.payload', 'string');
      };

      if (action.payload === '') {
        throw new ValidationError('setActivePage(): action.payload');
      };
      
      return {...state, active: `${action.payload[0].toUpperCase() + action.payload.slice(1)}`};
    }
  }
});

export const {setActivePage} = pagesSlice.actions;
export default pagesSlice.reducer;