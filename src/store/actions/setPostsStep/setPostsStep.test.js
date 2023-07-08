import { describe, it, expect } from "vitest";
import { setPostsStep } from "./setPostsStep";

describe('setPostsStep() action set of tests', () => {

  it('Should [succeed] on passing number', () => {
    expect(setPostsStep(13)).toEqual({
      type: "posts/setStep",
      payload: 13
    });
  });

  it('Should [throw error] on bad  empty payload', () => {
    expect(() => setPostsStep()).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing non-number', () => {
    expect(() => setPostsStep({})).toThrowError(/number/i);
    expect(() => setPostsStep('123')).toThrowError(/number/i);
    expect(() => setPostsStep(false)).toThrowError(/number/i);
  });

  it('Should [throw error] on passing negative or 0 number', () => {
    expect(() => setPostsStep(-123)).toThrowError(/payload/i);
    expect(() => setPostsStep(0)).toThrowError(/payload/i);
  });

});