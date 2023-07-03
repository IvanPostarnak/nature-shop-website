import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Posts from './Posts.page';

describe('<Posts/> page set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Posts/>);
    expect(container.getByTestId("posts-page")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Posts/>);
    expect(container.getByTestId("posts-page")).toBeVisible();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Posts/>);
    expect(container.getByTestId("posts-page")).toMatchSnapshot();
  });
  
});