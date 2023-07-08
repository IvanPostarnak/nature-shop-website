import { describe, it, expect } from "vitest";
import { setPostsAmount } from "./setPostsAmount";

describe('setPostsAmount() action set of tests', () => {

  it('Should [succeed] on passing positive or 0 number', () => {
    expect(setPostsAmount(13)).toEqual({
      type: "posts/setAmount",
      payload: 13
    });
    expect(setPostsAmount(0)).toEqual({
      type: "posts/setAmount",
      payload: 0
    });
  });

  it('Should [throw error] on bad empty payload', () => {
    expect(() => setPostsAmount()).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing non-number', () => {
    expect(() => setPostsAmount({})).toThrowError(/number/i);
    expect(() => setPostsAmount('123')).toThrowError(/number/i);
    expect(() => setPostsAmount(false)).toThrowError(/number/i);
  });

  it('Should [throw error] on passing negative number', () => {
    expect(() => setPostsAmount(-123)).toThrowError(/payload/i);
  });

});