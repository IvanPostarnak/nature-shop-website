import {describe, it, expect} from 'vitest';
import {getPostsFilterLanguageId} from './getPostsFilterLanguageId';

describe('getPostsFilterLanguageId() selector set of tests', () => {
  it('Should [return 1] on empty state', () => {
    expect(getPostsFilterLanguageId({})).toEqual(1);
  });

  it('Should [return 1] on empty state.posts', () => {
    expect(getPostsFilterLanguageId({posts: {}})).toEqual(1);
  });

  it('Should [return 1] on invalid state.posts.filter {}', () => {
    expect(getPostsFilterLanguageId({posts: {filter: {}}})).toEqual(1);
  });

  it("Should [return 1] on lacking 'languageId' property", () => {
    expect(getPostsFilterLanguageId({posts: {filter: {a: 1}}})).toEqual(1);
  });

  it("Should [return any value] of 'languageId' property", () => {
    expect(getPostsFilterLanguageId({posts: {filter: {languageId: 'asd'}}})).toEqual('asd');
    expect(getPostsFilterLanguageId({posts: {filter: {languageId: 123}}})).toEqual(123);
    expect(getPostsFilterLanguageId({posts: {filter: {languageId: true}}})).toEqual(true);
    expect(getPostsFilterLanguageId({posts: {filter: {languageId: [1]}}})).toEqual([1]);
    expect(getPostsFilterLanguageId({posts: {filter: {languageId: {a: 1}}}})).toEqual({a: 1});
  });
});
