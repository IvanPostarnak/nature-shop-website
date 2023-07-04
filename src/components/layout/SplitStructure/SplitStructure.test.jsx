import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import SplitStructure from './SplitStructure';
import styles from './SplitStructure.module.scss';

describe('SplitStructure <parent> component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure")).toBeVisible();
  });

  it('Should [have CSS class] \'split-structure\' on render', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure")).toHaveClass(styles.split_structure);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure")).toMatchSnapshot();
  });

});

describe('SplitStructure <items> component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render (both)', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure-first-item")).toBeInTheDocument();
    expect(container.getByTestId("split-structure-second-item")).toBeInTheDocument();
  });

  it('Should [be visible] on render (both)', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure-first-item")).toBeVisible();
    expect(container.getByTestId("split-structure-second-item")).toBeVisible();
  });

  it('Should [have CSS class] \'split-structure\' on render (both)', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure-first-item")).toHaveClass(styles.first_item);
    expect(container.getByTestId("split-structure-second-item")).toHaveClass(styles.second_item);
  });

  it('Should [match snapshot] on render (both)', () => {
    const container = render(<SplitStructure/>);
    expect(container.getByTestId("split-structure-first-item")).toMatchSnapshot();
    expect(container.getByTestId("split-structure-second-item")).toMatchSnapshot();
  });

});