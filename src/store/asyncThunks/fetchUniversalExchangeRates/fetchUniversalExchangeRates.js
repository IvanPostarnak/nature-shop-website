import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalExchangeRates = createAsyncThunk(
  'universal/fetchExchangeRates',
  async () => {
    const {response} = await UniversalService.getAllExchangeRates();
    return response.then((res) => res.data);
  },
);
