import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithAppRouter } from 'tests/helpers/renderWithAppRouter';
import { PUBLIC_ROUTES } from '../routes/routes';

describe('<AppRouter/> component set of tests', () => {

  afterEach(cleanup);

  it("Should [have] at least 1 public route", () => {
    expect(PUBLIC_ROUTES.length).toBeGreaterThanOrEqual(1);
  });

  it("Should [render only] 'Posts' page", async () => {
    const container = renderWithAppRouter(["/blog/posts"]);
    expect(await container.findByTestId("posts-page")).toBeVisible();
  });

  it("Should [render only] 'Home' page", () => {
    const container = renderWithAppRouter(["/home"]);
    expect(container.queryByTestId("posts-page")).toBeNull();
  });
  
});