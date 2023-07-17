import { describe, it, expect } from 'vitest';
import { setPostsFilterSearchQuery } from './setPostsFilterSearchQuery';

describe('setPostsFilterSearchQuery() redux-action set of tests', () => {

  it('Should [succeed] on payload=\'asdasdasdasd\' string', () => {
    expect(setPostsFilterSearchQuery('asdasdasdasd')).toEqual({
      type: 'pages/setSearchQuery',
      payload: 'asdasdasdasd'
    });
  });

  it('Should [throw error] on empty payload', () => {
    expect(() => setPostsFilterSearchQuery()).toThrowError(/string/i);
  });

  it('Should [throw error] on payload != \'string\'', () => {
    expect(() => setPostsFilterSearchQuery(123)).toThrowError(/string/i);
  });

});