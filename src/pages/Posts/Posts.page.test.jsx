import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithProvider } from 'tests/helpers/renderWithProvider';
import Posts from './Posts.page';
import styles from './Posts.module.scss';

describe('Posts page set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <Posts/>);
    expect(container.getByTestId("posts-page")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <Posts/>);
    expect(container.getByTestId("posts-page")).toBeVisible();
  });

  it('Should [have CSS class] \'posts\' on render', () => {
    const container = renderWithProvider({}, <Posts/>);
    expect(container.getByTestId("posts-page")).toHaveClass(styles.posts);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <Posts/>);
    expect(container.getByTestId("posts-page")).toMatchSnapshot();
  });
  
});