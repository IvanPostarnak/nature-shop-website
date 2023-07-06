import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import PostCard from './PostCard';
import styles from './PostCard.module.scss';
import { renderWithMemoryRouter } from 'tests/helpers/renderWithMemoryRouter';

describe('PostCard component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithMemoryRouter(["/"], <PostCard/>);
    expect(container.getByTestId("post-card")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithMemoryRouter(["/"], <PostCard/>);
    expect(container.getByTestId("post-card")).toBeVisible();
  });

  it('Should [have CSS class] \'post_card\' on render', () => {
    const container = renderWithMemoryRouter(["/"], <PostCard/>);
    expect(container.getByTestId("post-card")).toHaveClass(styles.post_card);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithMemoryRouter(["/"], <PostCard/>);
    expect(container.getByTestId("post-card")).toMatchSnapshot();
  });

});