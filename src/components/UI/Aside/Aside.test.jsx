import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Aside from './Aside';
import styles from './Aside.module.css';

describe('Aside component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Aside />);
    expect(container.getByTestId('aside')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Aside />);
    expect(container.getByTestId('aside')).toBeVisible();
  });

  it("Should [have CSS class] 'aside' on render", () => {
    const container = render(<Aside />);
    expect(container.getByTestId('aside')).toHaveClass(styles.aside);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Aside />);
    expect(container.getByTestId('aside')).toMatchSnapshot();
  });
});
