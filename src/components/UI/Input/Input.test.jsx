import { cleanup, render } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import styles from './Input.module.scss';
import Input from "./Input";

describe('Input component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Input/>);
    expect(container.getByTestId("input")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Input/>);
    expect(container.getByTestId("input")).toBeVisible();
  });

  it('Should [have CSS class]  \'input\' on render', () => {
    const container = render(<Input/>);
    expect(container.getByTestId("input")).toHaveClass(styles.input);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Input/>);
    expect(container.getByTestId("input")).toMatchSnapshot();
  });

});