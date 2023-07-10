import { describe, it, expect } from 'vitest';
import { setPostsLastVisited } from './setPostsLastVisited';

describe('setPostsLastVisited() redux-action set of tests', () => {

  it('Shoud [succeed] on payload = positive number', () => {
    const payload = 12;
    expect(setPostsLastVisited(payload)).toEqual({
      type: 'posts/setLastVisited',
      payload: payload
    });
  });

  it('Shoud [throw error] on empty payload', () => {
    expect(() => setPostsLastVisited()).toThrowError(/payload/i);
    expect(() => setPostsLastVisited(undefined)).toThrowError(/payload/i);
    expect(() => setPostsLastVisited(null)).toThrowError(/payload/i);
    expect(() => setPostsLastVisited(NaN)).toThrowError(/payload/i);
  });

  it('Shoud [throw error] on payload != \'number\'', () => {
    expect(() => setPostsLastVisited({a:1})).toThrowError(/number/i);
    expect(() => setPostsLastVisited('123')).toThrowError(/number/i);
    expect(() => setPostsLastVisited(true)).toThrowError(/number/i);
    expect(() => setPostsLastVisited([1])).toThrowError(/number/i);
    expect(() => setPostsLastVisited(function(){})).toThrowError(/number/i);
  });

  it('Shoud [throw error] on negative payload or payload=0', () => {
    expect(() => setPostsLastVisited(0)).toThrowError(/payload/i);
    expect(() => setPostsLastVisited(-123)).toThrowError(/payload/i);
  });

});