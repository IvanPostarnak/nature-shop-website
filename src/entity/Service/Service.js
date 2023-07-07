import Controller from "entity/Controller/Controller";

class Service {

  constructor(controller) {
    this.controller = controller;
  }

  getData(url, options) {
    const response = this.controller.fetch(url, options);
    return response;
  }
  
}

export { Service };
export default new Service(Controller);