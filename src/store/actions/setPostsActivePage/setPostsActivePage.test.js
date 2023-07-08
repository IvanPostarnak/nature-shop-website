import { describe, it, expect } from "vitest";
import { setPostsActivePage } from "./setPostsActivePage";

describe('setPostsActivePage() action set of tests', () => {

  it('Should [succeed] on passing positive number', () => {
    expect(setPostsActivePage(13)).toEqual({
      type: "posts/setActivePage",
      payload: 13
    });
  });

  it('Should [throw error] on bad empty payload', () => {
    expect(() => setPostsActivePage()).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing non-number', () => {
    expect(() => setPostsActivePage({})).toThrowError(/number/i);
    expect(() => setPostsActivePage('123')).toThrowError(/number/i);
    expect(() => setPostsActivePage(false)).toThrowError(/number/i);
  });

  it('Should [throw error] on passing negative or 0 number', () => {
    expect(() => setPostsActivePage(-123)).toThrowError(/payload/i);
    expect(() => setPostsActivePage(0)).toThrowError(/payload/i);
  });

});