import {describe, it, expect} from 'vitest';
import {parseColorCode} from './parseColorCode';

describe('colorCodeParse() helper function set of tests', () => {
  it('Should [work] on passing 3-symbol #hashtaged string', () => {
    expect(parseColorCode('#fff')).toBe('255,255,255');
  });

  it('Should [work] on passing 6-symbol #hashtaged string', () => {
    expect(parseColorCode('#ffffff')).toBe('255,255,255');
  });

  it('Should [replace all #] on passing #hashtaged string', () => {
    expect(parseColorCode('###fff#ff#f')).toBe('255,255,255');
  });

  it('Should [throw error] on passing non-string', () => {
    expect(() => parseColorCode()).toThrowError(/string/i);
    expect(() => parseColorCode(12)).toThrowError(/string/i);
    expect(() => parseColorCode(false)).toThrowError(/string/i);
    expect(() => parseColorCode(function () {})).toThrowError(/string/i);
    expect(() => parseColorCode({a: 1})).toThrowError(/string/i);
    expect(() => parseColorCode([1, 2])).toThrowError(/string/i);
    expect(() => parseColorCode(null)).toThrowError(/string/i);
    expect(() => parseColorCode(undefined)).toThrowError(/string/i);
    expect(() => parseColorCode(NaN)).toThrowError(/string/i);
  });

  it("Should [throw error] on passing '' empty string", () => {
    expect(() => parseColorCode('')).toThrowError(/colorString/i);
  });

  it('Should [throw error] on passing non-3 or non-6 symbol string', () => {
    expect(() => parseColorCode('1')).toThrowError(/colorString/i);
    expect(() => parseColorCode('12')).toThrowError(/colorString/i);
    expect(() => parseColorCode('1234')).toThrowError(/colorString/i);
    expect(() => parseColorCode('12345')).toThrowError(/colorString/i);
    expect(() => parseColorCode('1234567')).toThrowError(/colorString/i);
  });
});
