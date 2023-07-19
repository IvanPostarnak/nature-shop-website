import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalPaymentTypes = createAsyncThunk(
  'universal/fetchPaymentTypes',
  async () => {
    const {response} = await UniversalService.getAllPaymentTypes();
    return response.then((res) => res.data);
  },
);
