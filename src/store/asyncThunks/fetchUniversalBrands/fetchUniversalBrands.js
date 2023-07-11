import { createAsyncThunk } from "@reduxjs/toolkit";
import UniversalService from "services/UniversalService/UniversalService";

export const fetchUniversalBrands = createAsyncThunk("universal/fetchBrands", async () => {
  const {response} = await UniversalService.getAllBrands();
  return response.then(res => res.data);
})