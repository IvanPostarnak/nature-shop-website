import { createAsyncThunk } from "@reduxjs/toolkit";
import { UniversalService } from "services/services";

export const fetchUniversalBrands = createAsyncThunk("universal/fetchBrands", async () => {
  const {response} = await UniversalService.getAllBrands();
  return response.then(res => res.data);
})