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

  getOneById(id) {
    const response = this.getData(`/posts/${id}`);
    return response;
  }

  getBySearchQuery(titleQuery, contentQuery) {
    if (!titleQuery) {
      return this.getAll();
    }
    const response = this.getData("/posts/search", {
      params: {
        title: titleQuery,
        content: contentQuery || titleQuery
      }
    });
    return response;
  }
  
}

export default new PostsService(Controller);