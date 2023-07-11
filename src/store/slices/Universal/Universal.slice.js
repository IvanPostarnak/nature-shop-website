import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./universal.config";
import { fetchUniversalBrands } from "store/asyncThunks/fetchUniversalBrands/fetchUniversalBrands";
import { setInLocalStorage } from "helpers/helpers";

const universalSlice = createSlice({
  name: 'universal',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversalBrands.pending, (state, action) => {
        return {
          ...state,
          brands: {
            ...state.brands,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalBrands.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.brands.key, action.payload);
        return {
          ...state,
          brands: {
            ...state.brands,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })
  }
})

export default universalSlice.reducer;