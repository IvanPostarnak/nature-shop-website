import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Pagination from './Pagination';
import styles from './Pagination.module.scss';

describe('Pagination component set of tests', () => {

  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<Pagination/>);
    expect(container.getByTestId("pagination")).toBeVisible();
  });

  it('Should [have CSS class] \'pagination\' on render', () => {
    const container = render(<Pagination/>);
    expect(container.getByTestId("pagination")).toHaveClass(styles.pagination);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Pagination/>);
    expect(container.getByTestId("pagination")).toMatchSnapshot();
  });

  it('Should [have prev] button on render', () => {
    const container = render(<Pagination/>);
    expect(container.getByTestId("pagination-button-prev")).toBeVisible();
  });

  it('Should [have next] button on render', () => {
    const container = render(<Pagination/>);
    expect(container.getByTestId("pagination-button-next")).toBeVisible();
  });

});