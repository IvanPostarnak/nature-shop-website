import { describe, it, expect } from "vitest";
import { getDevice } from './getDevice';

describe('getDevice() selector set of tests', () => {

  it('Should [return default device (desktop)] on empty state object', () => {
    expect(getDevice({})).toEqual({isMobile: false, isTablet: false, isDesktop: true});
  });

  it('Should [return any value] of \'device\' property', () => {
    expect(getDevice({ device: "any value" })).toEqual("any value");
    expect(getDevice({ device: 12 })).toEqual(12);
    expect(getDevice({ device: [13, 'text'] })).toEqual([13, 'text']);
    expect(getDevice({ device: {age: 13, string: 'text'} })).toEqual({age: 13, string: 'text'});
  });

});