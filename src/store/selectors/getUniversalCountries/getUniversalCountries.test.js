import {describe, it, expect} from 'vitest';
import {getUniversalCountries} from './getUniversalCountries';

describe('getUniversalCountries() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalCountries({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'countries',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalCountries({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'countries',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.countries', () => {
    expect(getUniversalCountries({universal: {countries: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalCountries({universal: {countries: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalCountries({universal: {countries: 1}})).toEqual(1);
    expect(getUniversalCountries({universal: {countries: '1'}})).toEqual('1');
    expect(getUniversalCountries({universal: {countries: true}})).toEqual(true);
  });
});
