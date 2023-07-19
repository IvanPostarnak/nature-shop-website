import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalCompanies = createAsyncThunk('universal/fetchCompanies', async () => {
  const {response} = await UniversalService.getAllCompanies();
  return response.then((res) => res.data);
});
