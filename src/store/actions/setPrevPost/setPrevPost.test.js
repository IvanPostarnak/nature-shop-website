import { describe, it, expect } from 'vitest';
import { setPrevPost } from './setPrevPost';

describe('setPrevPost() redux-action set of tests', () => {

  it('Shoud [succeed] on payload={id: title: } object', () => {
    const payload = {id: 1, title: 'title'};
    expect(setPrevPost(payload)).toEqual({
      type: 'posts/setPrevPost',
      payload: payload
    });
  });

  it('Shoud [throw error] on empty payload', () => {
    expect(() => setPrevPost()).toThrowError(/payload/i);
    expect(() => setPrevPost(undefined)).toThrowError(/payload/i);
    expect(() => setPrevPost(null)).toThrowError(/payload/i);
    expect(() => setPrevPost(NaN)).toThrowError(/payload/i);
  });

  it('Shoud [throw error] on payload != \'object\'', () => {
    expect(() => setPrevPost(123)).toThrowError(/object/i);
    expect(() => setPrevPost('123')).toThrowError(/object/i);
    expect(() => setPrevPost(true)).toThrowError(/object/i);
    expect(() => setPrevPost([1])).toThrowError(/object/i);
    expect(() => setPrevPost(function(){})).toThrowError(/object/i);
  });

  it('Shoud [throw error] on payload={} empty object', () => {
    expect(() => setPrevPost({})).toThrowError(/payload/i);
  });

});