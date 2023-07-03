// add all custom errors into window global object
import * as errors from 'errors/errors';
for (let key in errors) {
  window[key] = errors[key];
};