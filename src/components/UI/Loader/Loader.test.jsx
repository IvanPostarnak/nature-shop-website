import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, render} from '@testing-library/react';
import Loader from './Loader';
import styles from './Loader.module.scss';

describe('Loader component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Loader />);
    expect(container.getByTestId('loader')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Loader />);
    expect(container.getByTestId('loader')).toBeVisible();
  });

  it("Should [have CSS class] 'loader' on render", () => {
    const container = render(<Loader />);
    expect(container.getByTestId('loader')).toHaveClass(styles.loader);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Loader />);
    expect(container.getByTestId('loader')).toMatchSnapshot();
  });
});
