import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import SingleStructure from './SingleStructure';
import styles from './SingleStructure.module.scss';

describe('SingleStructure component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<SingleStructure/>);
    expect(container.getByTestId("single-structure")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<SingleStructure/>);
    expect(container.getByTestId("single-structure")).toBeVisible();
  });

  it('Should [have CSS class] \'single-structure\' on render', () => {
    const container = render(<SingleStructure/>);
    expect(container.getByTestId("single-structure")).toHaveClass(styles.single_structure);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<SingleStructure/>);
    expect(container.getByTestId("single-structure")).toMatchSnapshot();
  });

});