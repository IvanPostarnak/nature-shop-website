import {createSlice} from '@reduxjs/toolkit';
import {setActivePage} from 'store/actions/setActivePage/setActivePage';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    active: 'Home',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setActivePage, (state, action) => {
      return {...state, active: action.payload};
    });
  },
});

export default pagesSlice.reducer;
