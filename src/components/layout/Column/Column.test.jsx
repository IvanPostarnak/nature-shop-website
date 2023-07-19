import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Column from './Column';
import styles from './Column.module.scss';

describe('Column component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Column />);
    expect(container.getByTestId('app-column')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Column />);
    expect(container.getByTestId('app-column')).toBeVisible();
  });

  it("Should [have CSS class] 'column' on render", () => {
    const container = render(<Column />);
    expect(container.getByTestId('app-column')).toHaveClass(styles.column);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Column />);
    expect(container.getByTestId('app-column')).toMatchSnapshot();
  });
});
