import {describe, it, expect} from 'vitest';
import {getUniversalExchangeRates} from './getUniversalExchangeRates';

describe('getUniversalExchangeRates() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalExchangeRates({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'exchangeRates',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalExchangeRates({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'exchangeRates',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.exchange_rates', () => {
    expect(getUniversalExchangeRates({universal: {exchange_rates: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalExchangeRates({universal: {exchange_rates: {step: '1'}}})).toEqual({
      step: '1',
    });
    expect(getUniversalExchangeRates({universal: {exchange_rates: 1}})).toEqual(1);
    expect(getUniversalExchangeRates({universal: {exchange_rates: '1'}})).toEqual('1');
    expect(getUniversalExchangeRates({universal: {exchange_rates: true}})).toEqual(true);
  });
});
