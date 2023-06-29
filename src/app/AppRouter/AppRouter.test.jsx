import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from 'tests/helpers/renderWithRouter';
import { publicRoutes } from '../routes/routes';

describe('<AppRouter/> component set of tests', () => {
  afterEach(cleanup);

  it("Should [have] at least 1 public route", () => {
    expect(publicRoutes.length).toBeGreaterThanOrEqual(1);
  });

  it("Should [render only] 'Posts' page", () => {
    const container = renderWithRouter(["/blog/posts"]);
    expect(container.getByTestId("posts-page")).toBeVisible();
  });

  it("Should [render only] 'Home' page", () => {
    const container = renderWithRouter(["/home"]);
    expect(container.queryByTestId("posts-page")).toBeNull();
  });
});