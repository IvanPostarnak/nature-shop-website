import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import List from './List';
import styles from './List.module.scss';

describe('List component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<List/>);
    expect(container.getByTestId("list")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<List/>);
    expect(container.getByTestId("list")).toBeVisible();
  });

  it('Should [have CSS class] \'list\' on render', () => {
    const container = render(<List/>);
    expect(container.getByTestId("list")).toHaveClass(styles.list);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<List/>);
    expect(container.getByTestId("list")).toMatchSnapshot();
  });

});