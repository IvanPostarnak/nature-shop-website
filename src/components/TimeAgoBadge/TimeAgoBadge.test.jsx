import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import TimeAgoBadge from './TimeAgoBadge';
import styles from './TimeAgoBadge.module.scss';

describe('TimeAgoBadge component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<TimeAgoBadge />);
    expect(container.getByTestId('time-ago-badge')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<TimeAgoBadge />);
    expect(container.getByTestId('time-ago-badge')).toBeVisible();
  });

  it("Should [have CSS class] 'time_ago_badge' on render", () => {
    const container = render(<TimeAgoBadge />);
    expect(container.getByTestId('time-ago-badge')).toHaveClass(styles.time_ago_badge);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<TimeAgoBadge />);
    expect(container.getByTestId('time-ago-badge')).toMatchSnapshot();
  });
});
