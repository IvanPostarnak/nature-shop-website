import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalMeasureUnits = createAsyncThunk(
  'universal/fetchMeasureUnits',
  async () => {
    const {response} = await UniversalService.getAllMeasureUnits();
    return response.then((res) => res.data);
  },
);
