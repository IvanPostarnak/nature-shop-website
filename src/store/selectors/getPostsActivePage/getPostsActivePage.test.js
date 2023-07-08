import { describe, it, expect } from "vitest";
import { getPostsActivePage } from "./getPostsActivePage";

describe('getPostsActivePage() selector set of tests', () => {

  it('Should [return 1] on empty state', () => {
    expect(getPostsActivePage({})).toBe(1);
  });

  it('Should [return 1] on empty state.posts', () => {
    expect(getPostsActivePage({posts: {}})).toBe(1);
  });

  it('Should [return any value] on state.posts.activePage', () => {
    expect(getPostsActivePage({posts: {activePage: 1}})).toBe(1);
    expect(getPostsActivePage({posts: {activePage: '1'}})).toBe('1');
  });

});