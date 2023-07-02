import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import Background from './Background';

describe('Background set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Background/>);
    expect(container.getByTestId("app-background")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Background/>);
    expect(container.getByTestId("app-background")).toBeVisible();
  });

});