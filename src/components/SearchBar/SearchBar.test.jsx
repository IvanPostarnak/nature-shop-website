import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import SearchBar from './SearchBar';
import styles from './SearchBar.module.scss';

describe('SearchBar component set of tests', () => {

  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<SearchBar/>);
    expect(container.getByTestId("search-bar")).toBeVisible();
  });

  it('Should [have CSS class] \'search_bar\' on render', () => {
    const container = render(<SearchBar/>);
    expect(container.getByTestId("search-bar")).toHaveClass(styles.search_bar);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<SearchBar/>);
    expect(container.getByTestId("search-bar")).toMatchSnapshot();
  });

});