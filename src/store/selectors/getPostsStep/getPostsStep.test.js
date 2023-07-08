import { describe, it, expect } from "vitest";
import { getPostsStep } from "./getPostsStep";

describe('getPostsStep() selector set of tests', () => {

  it('Should [return 10] on empty state', () => {
    expect(getPostsStep({})).toBe(10);
  });

  it('Should [return 10] on empty state.posts', () => {
    expect(getPostsStep({posts: {}})).toBe(10);
  });

  it('Should [return any value] on state.posts.step', () => {
    expect(getPostsStep({posts: {step: 1}})).toBe(1);
    expect(getPostsStep({posts: {step: '1'}})).toBe('1');
  });

});