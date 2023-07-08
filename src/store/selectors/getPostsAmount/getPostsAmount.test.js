import { describe, it, expect } from "vitest";
import { getPostsAmount } from "./getPostsAmount";

describe('getPostsAmount() selector set of tests', () => {

  it('Should [return 0] on empty state', () => {
    expect(getPostsAmount({})).toBe(0);
  });

  it('Should [return 0] on empty state.posts', () => {
    expect(getPostsAmount({posts: {}})).toBe(0);
  });

  it('Should [return any value] on state.posts.amount', () => {
    expect(getPostsAmount({posts: {amount: 1}})).toBe(1);
    expect(getPostsAmount({posts: {amount: '1'}})).toBe('1');
  });

});