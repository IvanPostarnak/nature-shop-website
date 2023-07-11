import { createAsyncThunk } from "@reduxjs/toolkit";
import { UniversalService } from "services/services";

export const fetchUniversalCurrency = createAsyncThunk("universal/fetchCurrency", async () => {
  const {response} = await UniversalService.getAllCurrency();
  return response.then(res => res.data);
})