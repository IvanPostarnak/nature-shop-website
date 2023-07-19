import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Button from './Button';
import styles from './Button.module.scss';

describe('Button component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Button />);
    expect(container.getByTestId('button')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Button />);
    expect(container.getByTestId('button')).toBeVisible();
  });

  it("Should [have CSS class] 'button' on render", () => {
    const container = render(<Button />);
    expect(container.getByTestId('button')).toHaveClass(styles.button);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Button />);
    expect(container.getByTestId('button')).toMatchSnapshot();
  });
});
