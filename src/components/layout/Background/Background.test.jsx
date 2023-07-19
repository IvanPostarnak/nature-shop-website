import {cleanup, render} from '@testing-library/react';
import {describe, it, expect, afterEach} from 'vitest';
import Background from './Background';
import styles from './Background.module.css';

describe('Background set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Background />);
    expect(container.getByTestId('app-background')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Background />);
    expect(container.getByTestId('app-background')).toBeVisible();
  });

  it("Should [have CSS class] 'background' on render", () => {
    const container = render(<Background />);
    expect(container.getByTestId('app-background')).toHaveClass(styles.background);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Background />);
    expect(container.getByTestId('app-background')).toMatchSnapshot();
  });
});
