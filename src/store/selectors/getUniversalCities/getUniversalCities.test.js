import { describe, it, expect } from "vitest";
import { getUniversalCities } from "./getUniversalCities";

describe('getUniversalCities() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalCities({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'cities',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalCities({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'cities',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.cities', () => {
    expect(getUniversalCities({universal: {cities: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalCities({universal: {cities: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalCities({universal: {cities: 1}})).toEqual(1);
    expect(getUniversalCities({universal: {cities: '1'}})).toEqual('1');
    expect(getUniversalCities({universal: {cities: true}})).toEqual(true);
  });

});