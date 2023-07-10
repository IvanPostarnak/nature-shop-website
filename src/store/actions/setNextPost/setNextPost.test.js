import { describe, it, expect } from 'vitest';
import { setNextPost } from './setNextPost';

describe('setNextPost() redux-action set of tests', () => {

  it('Shoud [succeed] on payload={id: title: } object', () => {
    const payload = {post_id: 1, title: 'title'};
    expect(setNextPost(payload)).toEqual({
      type: 'posts/setNextPost',
      payload: payload
    });
  });

  it('Shoud [throw error] on empty payload', () => {
    expect(() => setNextPost()).toThrowError(/payload/i);
    expect(() => setNextPost(undefined)).toThrowError(/payload/i);
    expect(() => setNextPost(null)).toThrowError(/payload/i);
    expect(() => setNextPost(NaN)).toThrowError(/payload/i);
  });

  it('Shoud [throw error] on payload != \'object\'', () => {
    expect(() => setNextPost(123)).toThrowError(/object/i);
    expect(() => setNextPost('123')).toThrowError(/object/i);
    expect(() => setNextPost(true)).toThrowError(/object/i);
    expect(() => setNextPost([1])).toThrowError(/object/i);
    expect(() => setNextPost(function(){})).toThrowError(/object/i);
  });

  it('Shoud [throw error] on payload={} empty object', () => {
    expect(() => setNextPost({})).toThrowError(/payload/i);
  });

});