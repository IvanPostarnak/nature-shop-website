import {describe, it, expect} from 'vitest';
import {getPostsActive} from './getPostsActive';

describe('getPostsActive() selector set of tests', () => {
  it('Should [return default state] on empty state', () => {
    expect(getPostsActive({})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts', () => {
    expect(getPostsActive({posts: {}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts.trident', () => {
    expect(getPostsActive({posts: {trident: {}}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return any value] on state.posts.trident.active', () => {
    expect(getPostsActive({posts: {trident: {active: 1}}})).toEqual(1);
    expect(getPostsActive({posts: {trident: {active: '1'}}})).toEqual('1');
  });
});
