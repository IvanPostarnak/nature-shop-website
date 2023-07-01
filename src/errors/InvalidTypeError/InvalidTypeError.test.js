import { describe, it, expect } from 'vitest';
import InvalidTypeError from './InvalidTypeError';

describe('InvalidTypeError set of tests', () => {
  it('Should [throw InvalidTypeError] on valid arguments', () => {
    expect(() => {throw new InvalidTypeError('text', 'number')}).toThrowError(/'string'/i);
  });

});