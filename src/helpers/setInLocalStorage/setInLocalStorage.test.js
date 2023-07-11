import { describe, it, expect, afterEach } from "vitest";
import { setInLocalStorage } from "./setInLocalStorage";

describe('setInLocalStorage() helper function set of tests', () => {

  afterEach(() => localStorage.clear());

  it('Should [succeed] on passing valid key and value', () => {
    expect(setInLocalStorage('key', 'value')).toBe(true);
    expect(localStorage.getItem('key')).toBe('"value"');
  });

  it('Should [throw error] on passing invalid value', () => {
    expect(() => setInLocalStorage('key')).toThrowError(/value/i);
    expect(() => setInLocalStorage('key', false)).toThrowError(/value/i);
    expect(() => setInLocalStorage('key', '')).toThrowError(/value/i);
  });

  it('Should [throw error] on key != string', () => {
    expect(() => setInLocalStorage(123, 'value')).toThrowError(/key/i);
    expect(() => setInLocalStorage([1], 'value')).toThrowError(/key/i);
    expect(() => setInLocalStorage({a:1}, 'value')).toThrowError(/key/i);
    expect(() => setInLocalStorage(()=>1, 'value')).toThrowError(/key/i);
    expect(() => setInLocalStorage(true, 'value')).toThrowError(/key/i);
  });

  it('Should [throw error] on passing \'\' empty string key', () => {
    expect(() => setInLocalStorage('', 'value')).toThrowError(/key/i);
  });

});