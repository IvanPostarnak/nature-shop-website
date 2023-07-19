import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import VisitedBadge from './VisitedBadge';
import styles from './VisitedBadge.module.scss';

describe('VisitedBadge component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<VisitedBadge />);
    expect(container.getByTestId('visited-badge')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<VisitedBadge />);
    expect(container.getByTestId('visited-badge')).toBeVisible();
  });

  it("Should [have CSS class] 'visited_badge' on render", () => {
    const container = render(<VisitedBadge />);
    expect(container.getByTestId('visited-badge')).toHaveClass(styles.visited_badge);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<VisitedBadge />);
    expect(container.getByTestId('visited-badge')).toMatchSnapshot();
  });
});
