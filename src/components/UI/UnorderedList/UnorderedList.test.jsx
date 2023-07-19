import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import UnorderedList from './UnorderedList';
import styles from './UnorderedList.module.scss';

describe('UnorderedList component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<UnorderedList />);
    expect(container.getByTestId('unordered-list')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<UnorderedList />);
    expect(container.getByTestId('unordered-list')).toBeVisible();
  });

  it("Should [have CSS class] 'unordered_list' on render", () => {
    const container = render(<UnorderedList />);
    expect(container.getByTestId('unordered-list')).toHaveClass(styles.unordered_list);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<UnorderedList />);
    expect(container.getByTestId('unordered-list')).toMatchSnapshot();
  });
});
