import {describe, it, expect} from 'vitest';
import {getPostsStart} from './getPostsStart';

describe('getPostsStart() selector set of tests', () => {
  it('Should [return 0] on empty state', () => {
    expect(getPostsStart({})).toBe(0);
  });

  it('Should [return 0] on empty state.posts', () => {
    expect(getPostsStart({posts: {}})).toBe(0);
  });

  it('Should [return 0] on empty state.posts.pagination', () => {
    expect(getPostsStart({posts: {pagination: {}}})).toBe(0);
  });

  it('Should [return any value] on state.posts.pagination.start', () => {
    expect(getPostsStart({posts: {pagination: {start: 1}}})).toBe(1);
    expect(getPostsStart({posts: {pagination: {start: '1'}}})).toBe('1');
  });
});
