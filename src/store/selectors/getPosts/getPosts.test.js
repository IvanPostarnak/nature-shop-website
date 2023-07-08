import { describe, it, expect } from "vitest";
import { getPosts } from "./getPosts";

describe('getPosts() selector set of tests', () => {

  it('Should [return default] object on empty state', () => {
    expect(getPosts({})).toEqual({
      amount: 0,
      start: 0,
      step: 10,
      activePage: 1
    });
  });

  it('Should [return {}] on empty state.posts', () => {
    expect(getPosts({posts: {}})).toEqual({});
  });

  it('Should [return any value] on state.posts', () => {
    expect(getPosts({posts: {activePage: 1}})).toEqual({activePage: 1});
    expect(getPosts({posts: 123})).toEqual(123);
    expect(getPosts({posts: 'string'})).toEqual('string');
  });

});