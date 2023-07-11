import { createSlice } from "@reduxjs/toolkit";
import { fetchUniversalBrands } from "store/asyncThunks/fetchUniversalBrands/fetchUniversalBrands";
import { setInLocalStorage } from "helpers/helpers";
import { fetchUniversalCities } from "store/asyncThunks/fetchUniversalCities/fetchUniversalCities";
import { fetchUniversalCompanies } from 'store/asyncThunks/fetchUniversalCompanies/fetchUniversalCompanies';
import { fetchUniversalColorSchemas } from "store/asyncThunks/fetchUniversalColorSchemas/fetchUniversalColorSchemas";
import { fetchUniversalCountries } from "store/asyncThunks/fetchUniversalCountries/fetchUniversalCountries";
import { fetchUniversalCurrency } from "store/asyncThunks/fetchUniversalCurrency/fetchUniversalCurrency";
import { fetchUniversalExchangeRates } from "store/asyncThunks/fetchUniversalExchangeRates/fetchUniversalExchangeRates";
import { fetchUniversalFamilyStatuses } from "store/asyncThunks/fetchUniversalFamilyStatuses/fetchUniversalFamilyStatuses";
import { fetchUniversalGenders } from "store/asyncThunks/fetchUniversalGenders/fetchUniversalGenders";
import { fetchUniversalLanguages } from "store/asyncThunks/fetchUniversalLanguages/fetchUniversalLanguages";
import { fetchUniversalMeasureUnits } from "store/asyncThunks/fetchUniversalMeasureUnits/fetchUniversalMeasureUnits";
import { fetchUniversalPackingMaterials } from "store/asyncThunks/fetchUniversalPackingMaterials/fetchUniversalPackingMaterials";
import { fetchUniversalPaymentTypes } from "store/asyncThunks/fetchUniversalPaymentTypes/fetchUniversalPaymentTypes";
import { initialState } from "./universal.config";

const universalSlice = createSlice({
  name: 'universal',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // brands
      .addCase(fetchUniversalBrands.pending, (state, action) => {
        return {
          ...state,
          brands: {
            ...state.brands,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalBrands.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.brands.key, action.payload);
        return {
          ...state,
          brands: {
            ...state.brands,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // cities
      .addCase(fetchUniversalCities.pending, (state, action) => {
        return {
          ...state,
          cities: {
            ...state.cities,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalCities.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.cities.key, action.payload);
        return {
          ...state,
          cities: {
            ...state.cities,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // color_schemas
      .addCase(fetchUniversalColorSchemas.pending, (state, action) => {
        return {
          ...state,
          color_schemas: {
            ...state.color_schemas,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalColorSchemas.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.color_schemas.key, action.payload);
        return {
          ...state,
          color_schemas: {
            ...state.color_schemas,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // companies
      .addCase(fetchUniversalCompanies.pending, (state, action) => {
        return {
          ...state,
          companies: {
            ...state.companies,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalCompanies.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.companies.key, action.payload);
        return {
          ...state,
          companies: {
            ...state.companies,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // countries
      .addCase(fetchUniversalCountries.pending, (state, action) => {
        return {
          ...state,
          countries: {
            ...state.countries,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalCountries.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.countries.key, action.payload);
        return {
          ...state,
          countries: {
            ...state.countries,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // currency
      .addCase(fetchUniversalCurrency.pending, (state, action) => {
        return {
          ...state,
          currency: {
            ...state.currency,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalCurrency.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.currency.key, action.payload);
        return {
          ...state,
          currency: {
            ...state.currency,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // exchange_rates
      .addCase(fetchUniversalExchangeRates.pending, (state, action) => {
        return {
          ...state,
          exchange_rates: {
            ...state.exchange_rates,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalExchangeRates.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.exchange_rates.key, action.payload);
        return {
          ...state,
          exchange_rates: {
            ...state.exchange_rates,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // family_statuses
      .addCase(fetchUniversalFamilyStatuses.pending, (state, action) => {
        return {
          ...state,
          family_statuses: {
            ...state.family_statuses,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalFamilyStatuses.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.family_statuses.key, action.payload);
        return {
          ...state,
          family_statuses: {
            ...state.family_statuses,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // genders
      .addCase(fetchUniversalGenders.pending, (state, action) => {
        return {
          ...state,
          genders: {
            ...state.genders,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalGenders.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.genders.key, action.payload);
        return {
          ...state,
          genders: {
            ...state.genders,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // languages
      .addCase(fetchUniversalLanguages.pending, (state, action) => {
        return {
          ...state,
          languages: {
            ...state.languages,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalLanguages.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.languages.key, action.payload);
        return {
          ...state,
          languages: {
            ...state.languages,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // measure_units
      .addCase(fetchUniversalMeasureUnits.pending, (state, action) => {
        return {
          ...state,
          measure_units: {
            ...state.measure_units,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalMeasureUnits.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.measure_units.key, action.payload);
        return {
          ...state,
          measure_units: {
            ...state.measure_units,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // packing_materials
      .addCase(fetchUniversalPackingMaterials.pending, (state, action) => {
        return {
          ...state,
          packing_materials: {
            ...state.packing_materials,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalPackingMaterials.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.packing_materials.key, action.payload);
        return {
          ...state,
          packing_materials: {
            ...state.packing_materials,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })

      // payment_types
      .addCase(fetchUniversalPaymentTypes.pending, (state, action) => {
        return {
          ...state,
          payment_types: {
            ...state.payment_types,
            status: 'pending'
          }
        }
      })
      .addCase(fetchUniversalPaymentTypes.fulfilled, (state, action) => {
        const result = setInLocalStorage(state.payment_types.key, action.payload);
        return {
          ...state,
          payment_types: {
            ...state.payment_types,
            status: 'success',
            isInLocalStorage: result ? true : false,
            length: action.payload.length
          }
        }
      })
  }
})

export default universalSlice.reducer;