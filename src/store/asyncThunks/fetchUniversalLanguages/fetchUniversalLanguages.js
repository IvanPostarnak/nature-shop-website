import { createAsyncThunk } from "@reduxjs/toolkit";
import { UniversalService } from "services/services";

export const fetchUniversalLanguages = createAsyncThunk("universal/fetchLanguages", async () => {
  const {response} = await UniversalService.getAllLanguages();
  return response.then(res => res.data);
})