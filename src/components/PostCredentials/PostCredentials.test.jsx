import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithMemoryRouter} from 'tests/helpers/renderWithMemoryRouter';
import PostCredentials from './PostCredentials';
import styles from './PostCredentials.module.css';

describe('PostCredentials component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithMemoryRouter(['/'], <PostCredentials />);
    expect(container.getByTestId('post-credentials')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithMemoryRouter(['/'], <PostCredentials />);
    expect(container.getByTestId('post-credentials')).toBeVisible();
  });

  it("Should [have CSS class] 'post_credentials' on render", () => {
    const container = renderWithMemoryRouter(['/'], <PostCredentials />);
    expect(container.getByTestId('post-credentials')).toHaveClass(styles.post_credentials);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithMemoryRouter(['/'], <PostCredentials />);
    expect(container.getByTestId('post-credentials')).toMatchSnapshot();
  });
});
