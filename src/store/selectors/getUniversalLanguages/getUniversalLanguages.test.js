import { describe, it, expect } from "vitest";
import { getUniversalLanguages } from "./getUniversalLanguages";

describe('getUniversalLanguages() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalLanguages({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'languages',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalLanguages({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'languages',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.languages', () => {
    expect(getUniversalLanguages({universal: {languages: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalLanguages({universal: {languages: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalLanguages({universal: {languages: 1}})).toEqual(1);
    expect(getUniversalLanguages({universal: {languages: '1'}})).toEqual('1');
    expect(getUniversalLanguages({universal: {languages: true}})).toEqual(true);
  });

});