import { describe, it, expect } from 'vitest';
import postsReducer from './Posts.slice';
import { setPostsStart } from 'store/actions/setPostsStart/setPostsStart';
import { setPostsAmount } from 'store/actions/setPostsAmount/setPostsAmount';
import { setPostsStep } from 'store/actions/setPostsStep/setPostsStep';
import { setPostsActivePage } from 'store/actions/setPostsActivePage/setPostsActivePage';

describe('Posts.slice set of tests', () => {

  it('Should [succeed] on setAmount', () => {
    const state = {
      amount: 0,
      start: 0,
      step: 10,
      activePage: 1
    };
    const action = setPostsAmount(100);
    expect(postsReducer(state, action).amount).toEqual(100);
  });

  it('Should [succeed] on setStart', () => {
    const state = {
      amount: 0,
      start: 0,
      step: 10,
      activePage: 1
    };
    const action = setPostsStart(10);
    expect(postsReducer(state, action).start).toEqual(10);
  });

  it('Should [succeed] on setStep', () => {
    const state = {
      amount: 0,
      start: 0,
      step: 10,
      activePage: 1
    };
    const action = setPostsStep(7);
    expect(postsReducer(state, action).step).toEqual(7);
  });

  it('Should [succeed] on setActivePage', () => {
    const state = {
      amount: 0,
      start: 0,
      step: 10,
      activePage: 1
    };
    const action = setPostsActivePage(4);
    expect(postsReducer(state, action).activePage).toEqual(4);
  });

});