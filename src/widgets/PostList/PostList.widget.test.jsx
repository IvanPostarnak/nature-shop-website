import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithProvider} from 'tests/helpers/renderWithProvider';
import PostList from './PostList.widget';
import styles from './PostList.module.scss';

describe('PostList component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <PostList />);
    expect(container.getByTestId('post-list')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <PostList />);
    expect(container.getByTestId('post-list')).toBeVisible();
  });

  it("Should [have CSS class] 'post_list' on render", () => {
    const container = renderWithProvider({}, <PostList />);
    expect(container.getByTestId('post-list')).toHaveClass(styles.post_list);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <PostList />);
    expect(container.getByTestId('post-list')).toMatchSnapshot();
  });
});
