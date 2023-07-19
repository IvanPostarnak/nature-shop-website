import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Content from './Content.widget';
import styles from './Content.module.scss';

describe('Content component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Content />);
    expect(container.getByTestId('content')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Content />);
    expect(container.getByTestId('content')).toBeVisible();
  });

  it("Should [have CSS class] 'content' on render", () => {
    const container = render(<Content />);
    expect(container.getByTestId('content')).toHaveClass(styles.content);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Content />);
    expect(container.getByTestId('content')).toMatchSnapshot();
  });
});
