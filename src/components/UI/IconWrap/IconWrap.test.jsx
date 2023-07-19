import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import IconWrap from './IconWrap';
import styles from './IconWrap.module.scss';

describe('IconWrap component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<IconWrap />);
    expect(container.getByTestId('icon-wrap')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<IconWrap />);
    expect(container.getByTestId('icon-wrap')).toBeVisible();
  });

  it("Should [have CSS class] 'icon_wrap' on render", () => {
    const container = render(<IconWrap />);
    expect(container.getByTestId('icon-wrap')).toHaveClass(styles.icon_wrap);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<IconWrap />);
    expect(container.getByTestId('icon-wrap')).toMatchSnapshot();
  });
});
