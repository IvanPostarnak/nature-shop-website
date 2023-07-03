import { Controller } from 'entity/Controller/Controller';
import { fetchData } from 'lib/fetchData/fetchData.lib';

class PagesController extends Controller {

  constructor(config) {
    super(config);
  }

  getAboutUs() {
    return this.fetch("/pages/about_us");
  }
  
}

export { PagesController };
export default new PagesController({
  baseURL: 'http://localhost:5300/',
  GET: fetchData
});