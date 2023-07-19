import {describe, it, expect, afterEach} from 'vitest';
import {getFromLocalStorage} from './getFromLocalStorage';

describe('getFromLocalStorage() helper function set of tests', () => {
  afterEach(() => localStorage.clear());

  it('Should [succeed] on passing valid key and value', () => {
    localStorage.setItem('key', 12345);
    expect(getFromLocalStorage('key')).toBe(12345);
  });

  it('Should [return null] on lacking the key in localStorage', () => {
    localStorage.setItem('key', 12345);
    expect(getFromLocalStorage('key123')).toBe(null);
  });

  it('Should [throw error] on key != string', () => {
    expect(() => getFromLocalStorage(123)).toThrowError(/string/i);
    expect(() => getFromLocalStorage([1])).toThrowError(/string/i);
    expect(() => getFromLocalStorage({a: 1})).toThrowError(/string/i);
    expect(() => getFromLocalStorage(() => 1)).toThrowError(/string/i);
    expect(() => getFromLocalStorage(true)).toThrowError(/string/i);
  });

  it("Should [throw error] on passing '' empty string key", () => {
    expect(() => getFromLocalStorage('')).toThrowError(/key/i);
  });
});
