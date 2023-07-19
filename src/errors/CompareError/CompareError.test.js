import {describe, it, expect} from 'vitest';
import CompareError from './CompareError';

describe('CompareError set of tests', () => {
  it('Should [throw CompareError] on valid arguments', () => {
    expect(() => {
      throw new CompareError('first', 'second');
    }).toThrowError(/to be equal to/i);
  });
});
