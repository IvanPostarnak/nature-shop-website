import { describe, it, expect } from "vitest";
import { getPostsStatus } from "./getPostsStatus";

describe('getPostsStatus() selector set of tests', () => {

  it('Should [return \'idle\'] on empty state', () => {
    expect(getPostsStatus({})).toBe('idle');
  });

  it('Should [return \'idle\'] on empty state.posts', () => {
    expect(getPostsStatus({posts: {}})).toBe('idle');
  });

  it('Should [return any value] on state.posts.status', () => {
    expect(getPostsStatus({posts: {status: 1}})).toBe(1);
    expect(getPostsStatus({posts: {status: '1'}})).toBe('1');
  });

});