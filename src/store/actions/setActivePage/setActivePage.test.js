import { describe, it, expect } from 'vitest';
import { setActivePage } from './setActivePage';

describe('setActivePage() redux-action set of tests', () => {

  it('Shoud [succeed] on payload=\'proper\' string', () => {
    expect(setActivePage('Proper')).toEqual({
      type: 'pages/setActivePage',
      payload: 'Proper'
    });
  });

  it('Shoud [capitalize] payload string', () => {
    expect(setActivePage('proper')).toEqual({
      type: 'pages/setActivePage',
      payload: 'Proper'
    });
  });

  it('Shoud [throw error] on empty payload', () => {
    expect(() => setActivePage()).toThrowError(/setActivePage/i);
  });

  it('Shoud [throw error] on payload != \'string\'', () => {
    expect(() => setActivePage(123)).toThrowError(/string/i);
  });

  it('Shoud [throw error] on payload=\'\' empty string', () => {
    expect(() => setActivePage('')).toThrowError(/payload/i);
  });

});