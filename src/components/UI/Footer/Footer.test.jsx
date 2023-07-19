import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Footer from './Footer';
import styles from './Footer.module.css';

describe('Footer component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Footer />);
    expect(container.getByTestId('footer')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Footer />);
    expect(container.getByTestId('footer')).toBeVisible();
  });

  it("Should [have CSS class] 'footer' on render", () => {
    const container = render(<Footer />);
    expect(container.getByTestId('footer')).toHaveClass(styles.footer);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Footer />);
    expect(container.getByTestId('footer')).toMatchSnapshot();
  });
});
