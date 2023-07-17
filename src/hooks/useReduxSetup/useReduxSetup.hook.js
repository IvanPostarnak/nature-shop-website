import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchPostsAmount,
  fetchUniversalBrands,
  fetchUniversalCities,
  fetchUniversalColorSchemas,
  fetchUniversalCompanies,
  fetchUniversalCountries,
  fetchUniversalCurrency,
  fetchUniversalExchangeRates,
  fetchUniversalFamilyStatuses,
  fetchUniversalGenders,
  fetchUniversalLanguages,
  fetchUniversalMeasureUnits,
  fetchUniversalPackingMaterials,
  fetchUniversalPaymentTypes
} from "store/asyncThunks";

export const useReduxSetup = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAmount());
    dispatch(fetchUniversalBrands());
    dispatch(fetchUniversalCities());
    dispatch(fetchUniversalColorSchemas());
    dispatch(fetchUniversalCompanies());
    dispatch(fetchUniversalCountries());
    dispatch(fetchUniversalCurrency());
    dispatch(fetchUniversalExchangeRates());
    dispatch(fetchUniversalFamilyStatuses());
    dispatch(fetchUniversalGenders());
    dispatch(fetchUniversalLanguages());
    dispatch(fetchUniversalMeasureUnits());
    dispatch(fetchUniversalPackingMaterials());
    dispatch(fetchUniversalPaymentTypes());
  }, []);
  
}