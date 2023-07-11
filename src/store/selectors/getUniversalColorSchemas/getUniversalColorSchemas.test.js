import { describe, it, expect } from "vitest";
import { getUniversalColorSchemas } from "./getUniversalColorSchemas";

describe('getUniversalColorSchemas() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalColorSchemas({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'colorSchemas',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalColorSchemas({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'colorSchemas',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.color_schemas', () => {
    expect(getUniversalColorSchemas({universal: {color_schemas: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalColorSchemas({universal: {color_schemas: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalColorSchemas({universal: {color_schemas: 1}})).toEqual(1);
    expect(getUniversalColorSchemas({universal: {color_schemas: '1'}})).toEqual('1');
    expect(getUniversalColorSchemas({universal: {color_schemas: true}})).toEqual(true);
  });

});