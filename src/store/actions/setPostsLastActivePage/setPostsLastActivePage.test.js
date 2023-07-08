import { describe, it, expect } from "vitest";
import { setPostsLastActivePage } from "./setPostsLastActivePage";

describe('setPostsLastActivePage() action set of tests', () => {

  it('Should [succeed] on passing positive number', () => {
    expect(setPostsLastActivePage(13)).toEqual({
      type: "posts/setLastActivePage",
      payload: 13
    });
  });

  it('Should [throw error] on bad empty payload', () => {
    expect(() => setPostsLastActivePage()).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing non-number', () => {
    expect(() => setPostsLastActivePage({})).toThrowError(/number/i);
    expect(() => setPostsLastActivePage('123')).toThrowError(/number/i);
    expect(() => setPostsLastActivePage(false)).toThrowError(/number/i);
  });

  it('Should [throw error] on passing negative or 0 number', () => {
    expect(() => setPostsLastActivePage(-123)).toThrowError(/payload/i);
    expect(() => setPostsLastActivePage(0)).toThrowError(/payload/i);
  });

});