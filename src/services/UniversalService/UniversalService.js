import {Service} from 'entity/Service/Service';
import Controller from 'entity/Controller/Controller';

class UniversalService extends Service {
  constructor(controller) {
    super(controller);
  }

  getAllBrands() {
    const response = this.getData('/universal/brands');
    return response;
  }

  getAllCities() {
    const response = this.getData('/universal/cities');
    return response;
  }

  getAllColorSchemas() {
    const response = this.getData('/universal/color_schemas');
    return response;
  }

  getAllCompanies() {
    const response = this.getData('/universal/companies');
    return response;
  }

  getAllCountries() {
    const response = this.getData('/universal/countries');
    return response;
  }

  getAllCurrency() {
    const response = this.getData('/universal/currency');
    return response;
  }

  getAllExchangeRates() {
    const response = this.getData('/universal/exchange_rates');
    return response;
  }

  getAllFamilyStatuses() {
    const response = this.getData('/universal/family_statuses');
    return response;
  }

  getAllGenders() {
    const response = this.getData('/universal/genders');
    return response;
  }

  getAllLanguages() {
    const response = this.getData('/universal/languages');
    return response;
  }

  getAllMeasureUnits() {
    const response = this.getData('/universal/measure_units');
    return response;
  }

  getAllPackingMaterials() {
    const response = this.getData('/universal/packing_materials');
    return response;
  }

  getAllPaymentTypes() {
    const response = this.getData('/universal/payment_types');
    return response;
  }
}

export default new UniversalService(Controller);
