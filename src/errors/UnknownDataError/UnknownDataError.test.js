import {describe, it, expect} from 'vitest';
import UnknownDataError from './UnknownDataError';

describe('UnknownDataError set of tests', () => {
  it('Should [throw UnknownDataError] on valid message', () => {
    expect(() => {
      throw new UnknownDataError('unknown');
    }).toThrowError(/assigned to/i);
  });
});
