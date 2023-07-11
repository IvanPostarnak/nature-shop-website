import { describe, it, expect } from "vitest";
import { getUniversalBrands } from "./getUniversalBrands";

describe('getUniversalBrands() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalBrands({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'brands',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalBrands({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'brands',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.brands', () => {
    expect(getUniversalBrands({universal: {brands: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalBrands({universal: {brands: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalBrands({universal: {brands: 1}})).toEqual(1);
    expect(getUniversalBrands({universal: {brands: '1'}})).toEqual('1');
    expect(getUniversalBrands({universal: {brands: true}})).toEqual(true);
  });

});