import {describe, it, expect} from 'vitest';
import {getPostsLastVisited} from './getPostsLastVisited';

describe('getPostsLastVisited() redux-selector set of tests', () => {
  it('Should [return empty array] on empty state', () => {
    expect(getPostsLastVisited({})).toEqual([]);
  });

  it('Should [return empty array] on empty state.posts', () => {
    expect(getPostsLastVisited({posts: {}})).toEqual([]);
  });

  it('Should [return empty array] on empty state.posts.session', () => {
    expect(getPostsLastVisited({posts: {session: {}}})).toEqual([]);
  });

  it('Should [return any value] of state.posts.session.lastVisited', () => {
    expect(getPostsLastVisited({posts: {session: {lastVisited: 1}}})).toEqual(1);
    expect(getPostsLastVisited({posts: {session: {lastVisited: '1'}}})).toEqual('1');
    expect(getPostsLastVisited({posts: {session: {lastVisited: true}}})).toEqual(true);
    expect(getPostsLastVisited({posts: {session: {lastVisited: false}}})).toEqual([]);
    expect(getPostsLastVisited({posts: {session: {lastVisited: [1, 2, 3]}}})).toEqual([1, 2, 3]);
  });
});
