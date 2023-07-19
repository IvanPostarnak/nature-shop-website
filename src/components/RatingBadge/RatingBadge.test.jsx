import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import RatingBadge from './RatingBadge';
import styles from './RatingBadge.module.scss';

describe('RatingBadge component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<RatingBadge />);
    expect(container.getByTestId('rating-badge')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<RatingBadge />);
    expect(container.getByTestId('rating-badge')).toBeVisible();
  });

  it("Should [have CSS class] 'rating_badge' on render", () => {
    const container = render(<RatingBadge />);
    expect(container.getByTestId('rating-badge')).toHaveClass(styles.rating_badge);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<RatingBadge />);
    expect(container.getByTestId('rating-badge')).toMatchSnapshot();
  });
});
