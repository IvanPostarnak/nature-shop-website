import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, render} from '@testing-library/react';
import AbsoluteLoader from './AbsoluteLoader';
import styles from './AbsoluteLoader.module.scss';

describe('AbsoluteLoader component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<AbsoluteLoader />);
    expect(container.getByTestId('absolute-loader')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<AbsoluteLoader />);
    expect(container.getByTestId('absolute-loader')).toBeVisible();
  });

  it("Should [have CSS class] 'absolute_loader' on render", () => {
    const container = render(<AbsoluteLoader />);
    expect(container.getByTestId('absolute-loader')).toHaveClass(styles.absolute_loader);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<AbsoluteLoader />);
    expect(container.getByTestId('absolute-loader')).toMatchSnapshot();
  });
});
