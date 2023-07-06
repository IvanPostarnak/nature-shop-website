import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import AuthorBadge from './AuthorBadge';
import styles from './AuthorBadge.module.scss';

describe('AuthorBadge component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<AuthorBadge/>);
    expect(container.getByTestId("author-badge")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<AuthorBadge/>);
    expect(container.getByTestId("author-badge")).toBeVisible();
  });

  it('Should [have CSS class] \'author_badge\' on render', () => {
    const container = render(<AuthorBadge/>);
    expect(container.getByTestId("author-badge")).toHaveClass(styles.author_badge);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<AuthorBadge/>);
    expect(container.getByTestId("author-badge")).toMatchSnapshot();
  });

});