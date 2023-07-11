import { createAsyncThunk } from "@reduxjs/toolkit";
import { UniversalService } from "services/services";

export const fetchUniversalFamilyStatuses = createAsyncThunk("universal/fetchFamilyStatuses", async () => {
  const {response} = await UniversalService.getAllFamilyStatuses();
  return response.then(res => res.data);
})