import Controller from "entity/Controller/Controller";
import { Service } from "entity/Service/Service";

class PagesService extends Service {

  constructor(controller) {
    super(controller);
  }

  getAboutUs() {
    const response = this.getData("/pages/about_us");
    return response;
  }
  
}

export default new PagesService(Controller);