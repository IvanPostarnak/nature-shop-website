// extend expect to accept jest-dom queries
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

// add all custom errors into window global object
import * as errors from 'errors/errors';
for (let key in errors) {
  window[key] = errors[key];
};