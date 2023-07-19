import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Nav from './Nav';
import styles from './Nav.module.css';

describe('Nav component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Nav />);
    expect(container.getByTestId('nav')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Nav />);
    expect(container.getByTestId('nav')).toBeVisible();
  });

  it("Should [have CSS class] 'nav' on render", () => {
    const container = render(<Nav />);
    expect(container.getByTestId('nav')).toHaveClass(styles.nav);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Nav />);
    expect(container.getByTestId('nav')).toMatchSnapshot();
  });
});
