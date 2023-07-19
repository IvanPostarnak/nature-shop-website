import {describe, it, expect} from 'vitest';
import ValidationError from './ValidationError';

describe('ValidationError set of tests', () => {
  it('Should [throw ValidationError] on valid message', () => {
    expect(() => {
      throw new ValidationError('value');
    }).toThrowError(/has invalid value/i);
  });
});
