import { describe, it, expect } from "vitest";
import { getUniversalMeasureUnits } from "./getUniversalMeasureUnits";

describe('getUniversalMeasureUnits() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalMeasureUnits({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'measureUnits',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalMeasureUnits({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'measureUnits',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.measure_units', () => {
    expect(getUniversalMeasureUnits({universal: {measure_units: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalMeasureUnits({universal: {measure_units: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalMeasureUnits({universal: {measure_units: 1}})).toEqual(1);
    expect(getUniversalMeasureUnits({universal: {measure_units: '1'}})).toEqual('1');
    expect(getUniversalMeasureUnits({universal: {measure_units: true}})).toEqual(true);
  });

});