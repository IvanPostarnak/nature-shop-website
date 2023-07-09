import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithProvider } from 'tests/helpers/renderWithProvider';
import SinglePost from './SinglePost.page';
import styles from './SinglePost.module.scss';

describe('SinglePost page set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <SinglePost/>);
    expect(container.getByTestId("single-post-page")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <SinglePost/>);
    expect(container.getByTestId("single-post-page")).toBeVisible();
  });

  it('Should [have CSS class] \'single_post\' on render', () => {
    const container = renderWithProvider({}, <SinglePost/>);
    expect(container.getByTestId("single-post-page")).toHaveClass(styles.single_post);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <SinglePost/>);
    expect(container.getByTestId("single-post-page")).toMatchSnapshot();
  });
  
});