import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Main from './Main';
import styles from './Main.module.scss';

describe('Main component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Main />);
    expect(container.getByTestId('main')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Main />);
    expect(container.getByTestId('main')).toBeVisible();
  });

  it("Should [have CSS class] 'main' on render", () => {
    const container = render(<Main />);
    expect(container.getByTestId('main')).toHaveClass(styles.main);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Main />);
    expect(container.getByTestId('main')).toMatchSnapshot();
  });
});
