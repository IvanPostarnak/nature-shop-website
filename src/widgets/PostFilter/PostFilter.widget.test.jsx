import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import PostFilter from './PostPostFilter.widget';
import styles from './PostFilter.module.scss';

describe('PostFilter component set of tests', () => {

  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<PostFilter/>);
    expect(container.getByTestId("post-filter")).toBeVisible();
  });

  it('Should [have CSS class] \'post_filter\' on render', () => {
    const container = render(<PostFilter/>);
    expect(container.getByTestId("post-filter")).toHaveClass(styles.post_filter);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<PostFilter/>);
    expect(container.getByTestId("post-filter")).toMatchSnapshot();
  });

});