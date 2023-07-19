import {describe, it, expect} from 'vitest';
import {getPostsStep} from './getPostsStep';

describe('getPostsStep() selector set of tests', () => {
  it('Should [return 10] on empty state', () => {
    expect(getPostsStep({})).toBe(10);
  });

  it('Should [return 10] on empty state.posts', () => {
    expect(getPostsStep({posts: {}})).toBe(10);
  });

  it('Should [return 10] on empty state.posts.pagination', () => {
    expect(getPostsStep({posts: {pagination: {}}})).toBe(10);
  });

  it('Should [return any value] on state.posts.pagination.step', () => {
    expect(getPostsStep({posts: {pagination: {step: 1}}})).toBe(1);
    expect(getPostsStep({posts: {pagination: {step: '1'}}})).toBe('1');
  });
});
