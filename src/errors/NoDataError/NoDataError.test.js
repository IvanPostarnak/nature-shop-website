import {describe, it, expect} from 'vitest';
import NoDataError from './NoDataError';

describe('NoDataError set of tests', () => {
  it('Should [throw NoDataError] on valid message', () => {
    expect(() => {
      throw new NoDataError('function');
    }).toThrowError(/not provided/i);
  });
});
