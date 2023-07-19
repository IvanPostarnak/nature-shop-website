import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Option from './Option';
import styles from './Option.module.css';

describe('Option component set of tests', () => {
  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<Option />);
    expect(container.getByTestId('option')).toBeVisible();
  });

  it("Should [have CSS class] 'option' on render", () => {
    const container = render(<Option />);
    expect(container.getByTestId('option')).toHaveClass(styles.option);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Option />);
    expect(container.getByTestId('option')).toMatchSnapshot();
  });
});
