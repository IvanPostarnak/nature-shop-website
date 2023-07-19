import {describe, it, expect} from 'vitest';
import {setActivePost} from './setActivePost';

describe('setActivePost() redux-action set of tests', () => {
  it('Shoud [succeed] on payload={id: title: } object', () => {
    const payload = {post_id: 1, title: 'title'};
    expect(setActivePost(payload)).toEqual({
      type: 'posts/setActivePost',
      payload: payload,
    });
  });

  it('Shoud [throw error] on empty payload', () => {
    expect(() => setActivePost()).toThrowError(/payload/i);
    expect(() => setActivePost(undefined)).toThrowError(/payload/i);
    expect(() => setActivePost(null)).toThrowError(/payload/i);
    expect(() => setActivePost(NaN)).toThrowError(/payload/i);
  });

  it("Shoud [throw error] on payload != 'object'", () => {
    expect(() => setActivePost(123)).toThrowError(/object/i);
    expect(() => setActivePost('123')).toThrowError(/object/i);
    expect(() => setActivePost(true)).toThrowError(/object/i);
    expect(() => setActivePost([1])).toThrowError(/object/i);
    expect(() => setActivePost(function () {})).toThrowError(/object/i);
  });

  it('Shoud [throw error] on payload={} empty object', () => {
    expect(() => setActivePost({})).toThrowError(/payload/i);
  });
});
