import {describe, it, expect} from 'vitest';
import {setPostsStart} from './setPostsStart';

describe('setPostsStart() action set of tests', () => {
  it('Should [succeed] on passing positive or 0 number', () => {
    expect(setPostsStart(13)).toEqual({
      type: 'posts/setStart',
      payload: 13,
    });
    expect(setPostsStart(0)).toEqual({
      type: 'posts/setStart',
      payload: 0,
    });
  });

  it('Should [throw error] on bad empty payload', () => {
    expect(() => setPostsStart()).toThrowError(/payload/i);
  });

  it('Should [throw error] on passing non-number', () => {
    expect(() => setPostsStart({})).toThrowError(/number/i);
    expect(() => setPostsStart('123')).toThrowError(/number/i);
    expect(() => setPostsStart(false)).toThrowError(/number/i);
  });

  it('Should [throw error] on passing negative number', () => {
    expect(() => setPostsStart(-123)).toThrowError(/payload/i);
  });
});
