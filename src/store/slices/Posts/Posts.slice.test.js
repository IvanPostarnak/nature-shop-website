import { describe, it, expect } from 'vitest';
import postsReducer from './Posts.slice';
import { setPostsStart } from 'store/actions/setPostsStart/setPostsStart';
import { setPostsAmount } from 'store/actions/setPostsAmount/setPostsAmount';
import { setPostsStep } from 'store/actions/setPostsStep/setPostsStep';
import { setPostsLastActivePage } from 'store/actions/setPostsLastActivePage/setPostsLastActivePage';
import { initialState } from './posts.slice.config';

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

  it.todo('Add test case for sync thunk fetchPostsAmount');

});