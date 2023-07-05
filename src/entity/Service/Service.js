import Controller from "entity/Controller/Controller";

class Service {

  constructor(controller) {
    this.controller = controller;
  }

  getData(url) {
    const response = this.controller.fetch(url);
    return response;
  }
  
}

export { Service };
export default new Service(Controller);