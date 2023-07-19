import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalGenders = createAsyncThunk('universal/fetchGenders', async () => {
  const {response} = await UniversalService.getAllGenders();
  return response.then((res) => res.data);
});
