import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Avatar from './Avatar';
import styles from './Avatar.module.scss';

describe('Avatar component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Avatar />);
    expect(container.getByTestId('avatar')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Avatar />);
    expect(container.getByTestId('avatar')).toBeVisible();
  });

  it("Should [have CSS class] 'avatar' on render", () => {
    const container = render(<Avatar />);
    expect(container.getByTestId('avatar')).toHaveClass(styles.avatar);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Avatar />);
    expect(container.getByTestId('avatar')).toMatchSnapshot();
  });
});
