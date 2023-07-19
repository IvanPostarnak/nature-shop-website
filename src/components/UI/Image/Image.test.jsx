import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Image from './Image';
import styles from './Image.module.css';

describe('Image component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Image />);
    expect(container.getByTestId('image')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Image />);
    expect(container.getByTestId('image')).toBeVisible();
  });

  it("Should [have CSS class] 'image' on render", () => {
    const container = render(<Image />);
    expect(container.getByTestId('image')).toHaveClass(styles.image);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Image />);
    expect(container.getByTestId('image')).toMatchSnapshot();
  });
});
