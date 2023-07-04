import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import Modal from "./Modal";
import styles from './Modal.module.scss';

describe('Modal component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Modal/>);
    expect(container.getByTestId("modal")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Modal/>);
    expect(container.getByTestId("modal")).toBeVisible();
  });

  it('Should [have CSS class] \'modal\' on render', () => {
    const container = render(<Modal/>);
    expect(container.getByTestId("modal")).toHaveClass(styles.modal);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Modal/>);
    expect(container.getByTestId("modal")).toMatchSnapshot();
  });

});