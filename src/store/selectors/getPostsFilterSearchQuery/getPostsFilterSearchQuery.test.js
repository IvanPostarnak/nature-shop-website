import { describe, it, expect } from 'vitest';
import { getPostsFilterSearchQuery } from './getPostsFilterSearchQuery';

describe('getPostsFilterSearchQuery() selector set of tests', () => {

  it('Should [return \'\'] on empty state', () => {
    expect(getPostsFilterSearchQuery({})).toEqual('');
  });

  it('Should [return \'\'] on empty state.posts', () => {
    expect(getPostsFilterSearchQuery({posts: {}})).toEqual('');
  });

  it('Should [return \'\'] on invalid state.posts.filter {}', () => {
    expect(getPostsFilterSearchQuery({posts: {filter: {}}})).toEqual('');
  });

  it('Should [return \'\'] on lacking \'searchQuery\' property', () => {
    expect(getPostsFilterSearchQuery({posts: {filter: {a: 1}}})).toEqual('');
  });

  it('Should [return any value] of \'searchQuery\' property', () => {
    expect(getPostsFilterSearchQuery({posts: {filter: {searchQuery: 'asd'}}})).toEqual('asd');
    expect(getPostsFilterSearchQuery({posts: {filter: {searchQuery: 123}}})).toEqual(123);
    expect(getPostsFilterSearchQuery({posts: {filter: {searchQuery: true}}})).toEqual(true);
    expect(getPostsFilterSearchQuery({posts: {filter: {searchQuery: [1]}}})).toEqual([1]);
    expect(getPostsFilterSearchQuery({posts: {filter: {searchQuery: {a:1}}}})).toEqual({a:1});
  });

})