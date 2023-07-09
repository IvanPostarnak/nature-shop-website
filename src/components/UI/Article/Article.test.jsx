import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Article from './Article';
import styles from './Article.module.scss';

describe('Article <parent> component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Article/>);
    expect(container.getByTestId("article")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Article/>);
    expect(container.getByTestId("article")).toBeVisible();
  });

  it('Should [have CSS class] \'article\' on render', () => {
    const container = render(<Article/>);
    expect(container.getByTestId("article")).toHaveClass(styles.article);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Article/>);
    expect(container.getByTestId("article")).toMatchSnapshot();
  });

});