import {describe, it, expect} from 'vitest';
import {getPostsNext} from './getPostsNext';

describe('getPostsNext() selector set of tests', () => {
  it('Should [return default state] on empty state', () => {
    expect(getPostsNext({})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts', () => {
    expect(getPostsNext({posts: {}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts.trident', () => {
    expect(getPostsNext({posts: {trident: {}}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return any value] on state.posts.trident.next', () => {
    expect(getPostsNext({posts: {trident: {next: 1}}})).toEqual(1);
    expect(getPostsNext({posts: {trident: {next: '1'}}})).toEqual('1');
  });
});
