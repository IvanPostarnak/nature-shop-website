import { describe, it, expect } from 'vitest';
import { getActivePage } from './getActivePage';

describe('getActivePage() selector set of tests', () => {

  it('Should [return Home] on empty state', () => {
    expect(getActivePage({})).toBe('Home');
  });

  it('Should [return Home] on state without \'active\'', () => {
    expect(getActivePage({pages: null})).toBe('Home');
  });

  it('Should [return Home] on invalid active=(NaN, undefined, null, \'\')', () => {
    expect(getActivePage({pages: {active: null}})).toBe('Home');
    expect(getActivePage({pages: {active: undefined}})).toBe('Home');
    expect(getActivePage({pages: {active: NaN}})).toBe('Home');
    expect(getActivePage({pages: {active: ''}})).toBe('Home');
  });

  it('Should [return any value] from state.pages.active', () => {
    expect(getActivePage({pages: {active: 12}})).toBe(12);
  });

});