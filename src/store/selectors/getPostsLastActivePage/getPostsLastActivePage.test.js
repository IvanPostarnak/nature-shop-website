import {describe, it, expect} from 'vitest';
import {getPostsLastActivePage} from './getPostsLastActivePage';

describe('getPostsLastActivePage() selector set of tests', () => {
  it('Should [return 1] on empty state', () => {
    expect(getPostsLastActivePage({})).toBe(1);
  });

  it('Should [return 1] on empty state.posts', () => {
    expect(getPostsLastActivePage({posts: {}})).toBe(1);
  });

  it('Should [return 1] on empty state.posts.pagination', () => {
    expect(getPostsLastActivePage({posts: {pagination: {}}})).toBe(1);
  });

  it('Should [return any value] on state.posts.activePage', () => {
    expect(getPostsLastActivePage({posts: {pagination: {lastActivePage: 1}}})).toBe(1);
    expect(getPostsLastActivePage({posts: {pagination: {lastActivePage: '1'}}})).toBe('1');
  });
});
