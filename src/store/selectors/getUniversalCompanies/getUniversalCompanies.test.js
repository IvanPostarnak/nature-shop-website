import {describe, it, expect} from 'vitest';
import {getUniversalCompanies} from './getUniversalCompanies';

describe('getUniversalCompanies() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalCompanies({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'companies',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalCompanies({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'companies',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.companies', () => {
    expect(getUniversalCompanies({universal: {companies: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalCompanies({universal: {companies: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalCompanies({universal: {companies: 1}})).toEqual(1);
    expect(getUniversalCompanies({universal: {companies: '1'}})).toEqual('1');
    expect(getUniversalCompanies({universal: {companies: true}})).toEqual(true);
  });
});
