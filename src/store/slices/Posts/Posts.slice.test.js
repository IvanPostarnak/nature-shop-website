import {describe, it, expect} from 'vitest';
import postsReducer from './Posts.slice';
import {setPostsStart} from 'store/actions/setPostsStart/setPostsStart';
import {setPostsAmount} from 'store/actions/setPostsAmount/setPostsAmount';
import {setPostsStep} from 'store/actions/setPostsStep/setPostsStep';
import {setPostsLastActivePage} from 'store/actions/setPostsLastActivePage/setPostsLastActivePage';
import {setActivePost} from 'store/actions/setActivePost/setActivePost';
import {setNextPost} from 'store/actions/setNextPost/setNextPost';
import {setPostsLastVisited} from 'store/actions/setPostsLastVisited/setPostsLastVisited';
import {setPostsFilterSearchQuery} from 'store/actions/setPostsFilterSearchQuery/setPostsFilterSearchQuery';
import {setPrevPost} from 'store/actions/setPrevPost/setPrevPost';
import {setPostsFilterLanguageId} from 'store/actions/setPostsFilterLanguageId/setPostsFilterLanguageId';

import {initialState} from './posts.slice.config';

describe('Posts.slice set of tests', () => {
  it('Should [succeed] on setAmount', () => {
    const state = initialState;
    const action = setPostsAmount(100);
    expect(postsReducer(state, action).amount.value).toEqual(100);
  });

  it('Should [succeed] on setStart', () => {
    const state = initialState;
    const action = setPostsStart(10);
    expect(postsReducer(state, action).pagination.start).toEqual(10);
  });

  it('Should [succeed] on setStep', () => {
    const state = initialState;
    const action = setPostsStep(7);
    expect(postsReducer(state, action).pagination.step).toEqual(7);
  });

  it('Should [succeed] on setLastActivePage', () => {
    const state = initialState;
    const action = setPostsLastActivePage(4);
    expect(postsReducer(state, action).pagination.lastActivePage).toEqual(4);
  });

  it('Should [succeed] on setActivePost', () => {
    const state = initialState;
    const action = setActivePost({post_id: 1, title: 'title'});
    expect(postsReducer(state, action).trident.active).toEqual({
      id: action.payload.post_id,
      title: action.payload.title,
    });
  });

  it('Should [succeed] on setNextPost', () => {
    const state = initialState;
    const action = setNextPost({post_id: 1, title: 'title'});
    expect(postsReducer(state, action).trident.next).toEqual({
      id: action.payload.post_id,
      title: action.payload.title,
    });
  });

  it('Should [succeed] on setPrevPost', () => {
    const state = initialState;
    const action = setPrevPost({post_id: 1, title: 'title'});
    expect(postsReducer(state, action).trident.prev).toEqual({
      id: action.payload.post_id,
      title: action.payload.title,
    });
  });

  it('Should [succeed] on setPostsLastVisited', () => {
    const state = initialState;
    const action1 = setPostsLastVisited(12);
    expect(postsReducer(state, action1).session.lastVisited).toEqual([12]);
    const action2 = setPostsLastVisited(13);
    expect(postsReducer(postsReducer(state, action1), action2).session.lastVisited).toEqual([
      13, 12,
    ]);
  });

  it.todo('Add test case for sync thunk fetchPostsAmount');

  it('Should [succeed] on setPostsFilterSearchQuery', () => {
    const state = initialState;
    const action1 = setPostsFilterSearchQuery('abc');
    expect(postsReducer(state, action1).filter.searchQuery).toEqual('abc');
    const action2 = setPostsFilterSearchQuery('abcde');
    expect(postsReducer(state, action2).filter.searchQuery).toEqual('abcde');
  });

  it('Should [succeed] on setPostsFilterLanguageId', () => {
    const state = initialState;
    const action1 = setPostsFilterLanguageId(10);
    expect(postsReducer(state, action1).filter.languageId).toEqual(10);
    const action2 = setPostsFilterLanguageId(12);
    expect(postsReducer(state, action2).filter.languageId).toEqual(12);
  });
});
