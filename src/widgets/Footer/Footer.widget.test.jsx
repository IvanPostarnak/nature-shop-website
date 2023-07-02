import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import Footer from './Footer.widget';

describe('Footer.widget set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toBeVisible();
  });
});