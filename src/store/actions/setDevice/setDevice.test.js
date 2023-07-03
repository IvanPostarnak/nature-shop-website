import { describe, it, expect } from "vitest";
import { setDevice } from "./setDevice";

describe('setDevice() action set of tests', () => {

  it('Should [succeed] on passing good object', () => {
    const payload = {first: false, second: true};
    expect(setDevice(payload)).toEqual({
      type: "device/setDevice",
      payload: payload
    });
  });

  it('Should [throw error] on passing non-object', () => {
    expect(() => setDevice(123)).toThrowError(/object/i);
    expect(() => setDevice('123')).toThrowError(/object/i);
    expect(() => setDevice(false)).toThrowError(/object/i);
  });

  it('Should [throw error] on passing object with non-bolean value(-s)', () => {
    const payload = {first: true, second: 123};
    expect(() => setDevice(payload)).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing object with 2 truths', () => {
    const payload = {first: true, second: true};
    expect(() => setDevice(payload)).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing object with 0 truths', () => {
    const payload = {first: false, second: false};
    expect(() => setDevice(payload)).toThrowError(/payload/i);
  });

});