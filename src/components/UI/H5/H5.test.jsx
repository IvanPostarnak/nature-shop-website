import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import H5 from './H5';
import styles from './H5.module.css';

describe('H5 component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<H5 />);
    expect(container.getByTestId('h5')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<H5 />);
    expect(container.getByTestId('h5')).toBeVisible();
  });

  it('Should [render passed value] on render', () => {
    const container = render(<H5>{'value'}</H5>);
    expect(container.getByText('value')).toBeVisible();
  });

  it("Should [have CSS class] 'H5' on render", () => {
    const container = render(<H5 />);
    expect(container.getByTestId('h5')).toHaveClass(styles.h5);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<H5 />);
    expect(container.getByTestId('h5')).toMatchSnapshot();
  });
});
