import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Select from './Select';
import styles from './Select.module.scss';

describe('Select component set of tests', () => {
  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<Select />);
    expect(container.getByTestId('select')).toBeVisible();
  });

  it("Should [have CSS class] 'select' on render", () => {
    const container = render(<Select />);
    expect(container.getByTestId('select')).toHaveClass(styles.select);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Select />);
    expect(container.getByTestId('select')).toMatchSnapshot();
  });
});
