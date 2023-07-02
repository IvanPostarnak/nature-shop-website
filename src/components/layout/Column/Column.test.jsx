import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Column from './Column';

describe('Column component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Column device={device}/>);
    expect(container.getByTestId("app-column")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Column device={device}/>);
    expect(container.getByTestId("app-column")).toBeVisible();
  });

});