import { createAsyncThunk } from "@reduxjs/toolkit";
import { UniversalService } from "services/services";

export const fetchUniversalCountries = createAsyncThunk("universal/fetchCountries", async () => {
  const {response} = await UniversalService.getAllCountries();
  return response.then(res => res.data);
})