import {describe, it, expect} from 'vitest';
import {getUniversalCurrency} from './getUniversalCurrency';

describe('getUniversalCurrency() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalCurrency({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'currency',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalCurrency({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'currency',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.currency', () => {
    expect(getUniversalCurrency({universal: {currency: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalCurrency({universal: {currency: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalCurrency({universal: {currency: 1}})).toEqual(1);
    expect(getUniversalCurrency({universal: {currency: '1'}})).toEqual('1');
    expect(getUniversalCurrency({universal: {currency: true}})).toEqual(true);
  });
});
