import { Controller } from 'entity/Controller/Controller';
import { fetchData } from 'lib/fetchData/fetchData.lib';

class PagesService extends Controller {

  constructor(config) {
    super(config);
  }

  getAboutUs() {
    const response = this.fetch("/pages/about_us");
    return response;
  }
  
}

export { PagesService };
export default new PagesService({
  baseURL: 'http://localhost:5300/',
  GET: fetchData
});