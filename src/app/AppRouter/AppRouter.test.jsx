import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithAppRouterAndProvider } from 'tests/helpers/renderWithAppRouterAndProvider';
import { PUBLIC_ROUTES } from '../routes/routes';

describe.todo('<AppRouter/> component set of tests', () => {

  afterEach(cleanup);

  it("Should [have] at least 1 public route", () => {
    expect(PUBLIC_ROUTES.length).toBeGreaterThanOrEqual(1);
  });

  it("Should [render only] 'Posts' page", async () => {
    const container = renderWithAppRouterAndProvider({}, ["/blog/posts"]);
    expect(await container.findByTestId("posts-page")).toBeInTheDocument();
    expect(await container.findByTestId("posts-page")).toBeVisible();

    expect(await container.findByTestId("about-us-page")).toBeNull();
  });

  it("Should [render only] 'AboutUs' page", async () => {
    const container = renderWithAppRouterAndProvider({}, ["/about-us"]);
    expect(await container.findByTestId("about-us-page")).toBeInTheDocument();
    expect(await container.findByTestId("about-us-page")).toBeVisible();

    expect(await container.findByTestId("posts-page")).toBeNull();
  });
  
});