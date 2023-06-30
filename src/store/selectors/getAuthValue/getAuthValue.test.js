import { describe, expect, it } from "vitest";
import { getAuthValue } from "./getAuthValue";

describe('getAuthValue() set of tests', () => {

  it('Should [return false] on empty state', () => {
    expect(getAuthValue({})).toBe(false);
  });

  it('Should [return false] on incorrect state', () => {
    expect(getAuthValue({ auth: true })).toBe(false);
  });

  it('Should [return true]', () => {
    expect(getAuthValue({ auth: {value: true} })).toBe(true);
  });

  it('Should [return false]', () => {
    expect(getAuthValue({ auth: {value: false} })).toBe(false);
  });

});