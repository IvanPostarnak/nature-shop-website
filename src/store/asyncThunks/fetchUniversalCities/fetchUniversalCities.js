import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalCities = createAsyncThunk('universal/fetchCities', async () => {
  const {response} = await UniversalService.getAllCities();
  return response.then((res) => res.data);
});
