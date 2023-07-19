import {describe, it, expect} from 'vitest';
import {setInitialValue} from './setInitialValue';

describe('setInitialValue() helper function set of tests', () => {
  it("Should [return passed value] if it's not a function", () => {
    expect(setInitialValue()).toBe(undefined);
    expect(setInitialValue(123)).toBe(123);
    expect(setInitialValue('string')).toBe('string');
    expect(setInitialValue(false)).toBe(false);
    expect(setInitialValue({a: 1})).toEqual({a: 1});
    expect(setInitialValue([1, 2])).toEqual([1, 2]);
    expect(setInitialValue(() => 1)).toBe(1);
    expect(setInitialValue(null)).toBe(null);
    expect(setInitialValue(undefined)).toBe(undefined);
    expect(setInitialValue(NaN)).toBe(NaN);
  });

  it("Should [call a function] if it's a function", () => {
    const func = () => 'value';
    expect(setInitialValue(func)).toBe('value');
  });
});
