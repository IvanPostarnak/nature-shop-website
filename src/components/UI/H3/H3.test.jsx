import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import H3 from './H3';
import styles from './H3.module.scss';

describe('H3 component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<H3 />);
    expect(container.getByTestId('h3')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<H3 />);
    expect(container.getByTestId('h3')).toBeVisible();
  });

  it('Should [render passed value] on render', () => {
    const container = render(<H3>{'value'}</H3>);
    expect(container.getByText('value')).toBeVisible();
  });

  it("Should [have CSS class] 'H3' on render", () => {
    const container = render(<H3 />);
    expect(container.getByTestId('h3')).toHaveClass(styles.h3);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<H3 />);
    expect(container.getByTestId('h3')).toMatchSnapshot();
  });
});
