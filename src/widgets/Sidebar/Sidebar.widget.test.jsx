import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Sidebar from './Sidebar.widget';
import styles from './Sidebar.module.css';

describe('Sidebar component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Sidebar />);
    expect(container.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Sidebar />);
    expect(container.getByTestId('sidebar')).toBeVisible();
  });

  it("Should [have CSS class] 'sidebar' on render", () => {
    const container = render(<Sidebar />);
    expect(container.getByTestId('sidebar')).toHaveClass(styles.sidebar);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Sidebar />);
    expect(container.getByTestId('sidebar')).toMatchSnapshot();
  });
});
