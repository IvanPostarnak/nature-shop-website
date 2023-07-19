import {describe, it, expect} from 'vitest';
import {getPostsPrev} from './getPostsPrev';

describe('getPostsPrev() selector set of tests', () => {
  it('Should [return default state] on empty state', () => {
    expect(getPostsPrev({})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts', () => {
    expect(getPostsPrev({posts: {}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return default state] on empty state.posts.trident', () => {
    expect(getPostsPrev({posts: {trident: {}}})).toEqual({
      id: null,
      title: null,
    });
  });

  it('Should [return any value] on state.posts.trident.prev', () => {
    expect(getPostsPrev({posts: {trident: {prev: 1}}})).toEqual(1);
    expect(getPostsPrev({posts: {trident: {prev: '1'}}})).toEqual('1');
  });
});
