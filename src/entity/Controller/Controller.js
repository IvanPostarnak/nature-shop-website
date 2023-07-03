import { InvalidTypeError, ValidationError } from "errors/errors";
import { fetchData } from "lib/fetchData/fetchData.lib";

class Controller {

  #baseURL = '';
  #GET;

  constructor(config) {
    this.#baseURL = config.baseURL;
    this.#GET = config.GET;
  }

  fetch(url, options) {
    if (this.#validateURL(url) && this.#validateOptions(options)) {
      const finalURL = this.#configureURL(url);
      return this.#GET(finalURL, options);
    }
  }

  #validateURL(url) {
    if (typeof url != "string") {
      throw new InvalidTypeError(`URL (${url})`, 'string');
    };
    if (url === "") {
      throw new ValidationError(`URL (${url})`);
    };
    return true;
  }

  #validateOptions(options) {
    if (options instanceof Function
        || options instanceof Array
        || options === null
        || options === undefined
        || options === NaN
    ) {
      throw new InvalidTypeError(`options (${options})`, 'object');
    };
    if (typeof options != "object") {
      throw new InvalidTypeError(`options (${options})`, 'object');
    };
    return true;
  }

  #configureURL(url, base) {
    const result = new URL(url, base || this.#baseURL);
    return result.href;
  }

  __test__ = {
    validateURL: this.#configureURL,
    validateOptions: this.#validateOptions,
    configureURL: this.#configureURL
  }

}

export { Controller };
export default new Controller({
  baseURL: 'http://localhost:5300/',
  GET: fetchData
});