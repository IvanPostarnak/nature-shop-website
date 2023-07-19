import {describe, it, expect} from 'vitest';
import {setPostsFilterLanguageId} from './setPostsFilterLanguageId';

describe('setPostsFilterLanguageId() redux-action set of tests', () => {
  it('Should [succeed] on payload=12 number', () => {
    expect(setPostsFilterLanguageId(12)).toEqual({
      type: 'posts/setLanguageId',
      payload: 12,
    });
  });

  it('Should [throw error] on empty payload', () => {
    expect(() => setPostsFilterLanguageId()).toThrowError(/number/i);
  });

  it("Should [throw error] on payload != 'number'", () => {
    expect(() => setPostsFilterLanguageId('123')).toThrowError(/number/i);
  });
});
