import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import OrderedList from './OrderedList';
import styles from './OrderedList.module.css';

describe('OrderedList component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<OrderedList />);
    expect(container.getByTestId('ordered-list')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<OrderedList />);
    expect(container.getByTestId('ordered-list')).toBeVisible();
  });

  it("Should [have CSS class] 'ordered_list' on render", () => {
    const container = render(<OrderedList />);
    expect(container.getByTestId('ordered-list')).toHaveClass(styles.ordered_list);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<OrderedList />);
    expect(container.getByTestId('ordered-list')).toMatchSnapshot();
  });
});
