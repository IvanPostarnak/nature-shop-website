import { describe, it, expect, afterEach } from 'vitest';
import Header from './Header.widget';
import { cleanup, render } from '@testing-library/react';

describe('Header.widget set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Header device={device}/>);
    expect(container.getByTestId("app-header")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Header device={device}/>);
    expect(container.getByTestId("app-header")).toBeVisible();
  });
});