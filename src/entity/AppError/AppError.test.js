import {describe, it, expect} from 'vitest';
import AppError from './AppError';

describe('AppError set of tests', () => {
  it('Should [throw AppError] on valid message', () => {
    expect(() => {
      throw new AppError('valid');
    }).toThrowError(/valid/i);
  });
});
