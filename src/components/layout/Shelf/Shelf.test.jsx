import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Shelf from './Shelf';

describe('Shelf component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Shelf device={device}/>);
    expect(container.getByTestId("app-shelf")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Shelf device={device}/>);
    expect(container.getByTestId("app-shelf")).toBeVisible();
  });

});