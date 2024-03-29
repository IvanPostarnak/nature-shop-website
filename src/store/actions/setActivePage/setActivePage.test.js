import {describe, it, expect} from 'vitest';
import {setActivePage} from './setActivePage';

describe('setActivePage() redux-action set of tests', () => {
  it("Should [succeed] on payload='proper' string", () => {
    expect(setActivePage('Proper')).toEqual({
      type: 'pages/setActivePage',
      payload: 'Proper',
    });
  });

  it('Should [capitalize] payload string', () => {
    expect(setActivePage('proper')).toEqual({
      type: 'pages/setActivePage',
      payload: 'Proper',
    });
  });

  it('Should [throw error] on empty payload', () => {
    expect(() => setActivePage()).toThrowError(/setActivePage/i);
  });

  it("Should [throw error] on payload != 'string'", () => {
    expect(() => setActivePage(123)).toThrowError(/string/i);
  });

  it("Should [throw error] on payload='' empty string", () => {
    expect(() => setActivePage('')).toThrowError(/payload/i);
  });
});
