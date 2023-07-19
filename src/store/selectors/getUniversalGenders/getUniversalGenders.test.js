import {describe, it, expect} from 'vitest';
import {getUniversalGenders} from './getUniversalGenders';

describe('getUniversalGenders() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalGenders({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'genders',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalGenders({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'genders',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.genders', () => {
    expect(getUniversalGenders({universal: {genders: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalGenders({universal: {genders: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalGenders({universal: {genders: 1}})).toEqual(1);
    expect(getUniversalGenders({universal: {genders: '1'}})).toEqual('1');
    expect(getUniversalGenders({universal: {genders: true}})).toEqual(true);
  });
});
