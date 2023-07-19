import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalColorSchemas = createAsyncThunk(
  'universal/fetchColorSchemas',
  async () => {
    const {response} = await UniversalService.getAllColorSchemas();
    return response.then((res) => res.data);
  },
);
