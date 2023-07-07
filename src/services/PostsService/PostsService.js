import Controller from "entity/Controller/Controller";
import { Service } from "entity/Service/Service";

class PostsService extends Service {

  constructor(controller) {
    super(controller);
  }

  getAll() {
    const response = this.getData("/posts/all");
    return response;
  }

  getTotalCount() {
    const response = this.getData("/posts/total_count");
    return response;
  }

  getOnePage(startFrom, howMany) {
    const response = this.getData("/posts/", {
      params: {
        start: startFrom,
        limit: howMany
      }
    });
    return response;
  }
  
}

export default new PostsService(Controller);