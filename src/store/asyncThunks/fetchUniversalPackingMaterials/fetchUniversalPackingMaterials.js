import {createAsyncThunk} from '@reduxjs/toolkit';
import {UniversalService} from 'services/services';

export const fetchUniversalPackingMaterials = createAsyncThunk(
  'universal/fetchPackingMaterials',
  async () => {
    const {response} = await UniversalService.getAllPackingMaterials();
    return response.then((res) => res.data);
  },
);
