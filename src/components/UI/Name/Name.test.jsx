import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Name from './Name';
import styles from './Name.module.css';

describe('Name component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Name />);
    expect(container.getByTestId('name')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Name />);
    expect(container.getByTestId('name')).toBeVisible();
  });

  it("Should [have CSS class] 'name' on render", () => {
    const container = render(<Name />);
    expect(container.getByTestId('name')).toHaveClass(styles.name);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Name />);
    expect(container.getByTestId('name')).toMatchSnapshot();
  });
});
