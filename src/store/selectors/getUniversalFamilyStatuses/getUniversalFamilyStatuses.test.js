import {describe, it, expect} from 'vitest';
import {getUniversalFamilyStatuses} from './getUniversalFamilyStatuses';

describe('getUniversalFamilyStatuses() selector set of tests', () => {
  it('Should [return default] object on empty state', () => {
    expect(getUniversalFamilyStatuses({})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'familyStatuses',
      length: 0,
    });
  });

  it('Should [return default] object on empty state.universal', () => {
    expect(getUniversalFamilyStatuses({universal: {}})).toEqual({
      status: 'idle',
      isInLocalStage: false,
      key: 'familyStatuses',
      length: 0,
    });
  });

  it('Should [return any valid value] on state.universal.family_statuses', () => {
    expect(getUniversalFamilyStatuses({universal: {family_statuses: {step: 1}}})).toEqual({
      step: 1,
    });
    expect(getUniversalFamilyStatuses({universal: {family_statuses: {step: '1'}}})).toEqual({
      step: '1',
    });
    expect(getUniversalFamilyStatuses({universal: {family_statuses: 1}})).toEqual(1);
    expect(getUniversalFamilyStatuses({universal: {family_statuses: '1'}})).toEqual('1');
    expect(getUniversalFamilyStatuses({universal: {family_statuses: true}})).toEqual(true);
  });
});
