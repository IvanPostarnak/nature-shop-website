import Controller from "entity/Controller/Controller";

class Service {

  constructor(controller) {
    this.controller = controller;
  }

  getData() {
    const response = this.controller.fetch("/pages/about_us");
    return response;
  }
  
}

export { Service };
export default new Service(Controller);