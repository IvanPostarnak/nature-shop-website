import {describe, it, expect} from 'vitest';
import {prepareData} from './prepareData';

describe('prepareData() set of tests', () => {
  it("Should [return object] on pass:'object' expect:'object'", () => {
    const data = {a: 1};
    const expected = 'object';
    expect(prepareData(data, expected)).toEqual(data);
  });

  it("Should [return object] on pass:'array' expect:'object'", () => {
    const data = [{a: 1}];
    const expected = 'object';
    expect(prepareData(data, expected)).toEqual(data[0]);
  });

  it("Should [return array] on pass:'array' expect:'array'", () => {
    const data = [{a: 1}];
    const expected = 'array';
    expect(prepareData(data, expected)).toEqual(data);
  });

  it("Should [throw error] on pass:'object' expect:'array'", () => {
    const data = {a: 1};
    const expected = 'array';
    expect(() => prepareData(data, expected)).toThrowError(/array/i);
  });

  it("Should [throw error] on pass:'[1]' expect:'object'", () => {
    const data = [1];
    const expected = 'object';
    expect(() => prepareData(data, expected)).toThrowError(/data/i);
  });

  it("Should [throw error] on pass:'function' expect:'object'", () => {
    const data = function () {};
    const expected = 'object';
    expect(() => prepareData(data, expected)).toThrowError(/object/i);
  });

  it("Should [throw error] on pass:'non-array/object' expect:'object'", () => {
    const data = '123';
    const expected = 'object';
    expect(() => prepareData(data, expected)).toThrowError(/object/i);
  });

  it("Should [throw error] on pass:'non-array' expect:'array'", () => {
    const data = '123';
    const expected = 'array';
    expect(() => prepareData(data, expected)).toThrowError(/array/i);
  });
});
