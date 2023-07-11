import { describe, it, expect } from "vitest";
import { getUniversalPaymentTypes } from "./getUniversalPaymentTypes";

describe('getUniversalPaymentTypes() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getUniversalPaymentTypes({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'paymentTypes',
      length: 0
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalPaymentTypes({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'paymentTypes',
      length: 0
    });
  });

  it('Should [return any valid value] on state.universal.payment_types', () => {
    expect(getUniversalPaymentTypes({universal: {payment_types: {step: 1}}})).toEqual({step: 1});
    expect(getUniversalPaymentTypes({universal: {payment_types: {step: '1'}}})).toEqual({step: '1'});
    expect(getUniversalPaymentTypes({universal: {payment_types: 1}})).toEqual(1);
    expect(getUniversalPaymentTypes({universal: {payment_types: '1'}})).toEqual('1');
    expect(getUniversalPaymentTypes({universal: {payment_types: true}})).toEqual(true);
  });

});