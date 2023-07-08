import { describe, it, expect } from "vitest";
import { getPostsAmount } from "./getPostsAmount";

describe('getPostsAmount() selector set of tests', () => {

  it('Should [return 0] on empty state', () => {
    expect(getPostsAmount({})).toEqual({
      value: 0,
      status: 'idle'
    });
  });

  it('Should [return 0] on empty state.posts', () => {
    expect(getPostsAmount({posts: {}})).toEqual({
      value: 0,
      status: 'idle'
    });
  });

  it('Should [return any value] on state.posts.amount', () => {
    expect(getPostsAmount({posts: {amount: 1}})).toEqual(1);
    expect(getPostsAmount({posts: {amount: '1'}})).toEqual('1');
  });

});