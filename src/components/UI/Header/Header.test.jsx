import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import styles from './Header.module.scss';

describe('Header component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Header/>);
    expect(container.getByTestId("header")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Header/>);
    expect(container.getByTestId("header")).toBeVisible();
  });

  it('Should [have CSS class] \'header\' on render', () => {
    const container = render(<Header/>);
    expect(container.getByTestId("header")).toHaveClass(styles.header);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Header/>);
    expect(container.getByTestId("header")).toMatchSnapshot();
  });

});