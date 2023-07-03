import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from '@testing-library/react';
import AboutUsPage from "./AboutUs.page";

describe('AboutUs.page set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<AboutUsPage/>);
    expect(container.getByTestId("about-us-page")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<AboutUsPage/>);
    expect(container.getByTestId("about-us-page")).toBeVisible();
  });

  it('Should [be visible] on render', () => {
    const container = render(<AboutUsPage/>);
    expect(container.getByTestId("about-us-page")).toMatchSnapshot();
  });

});