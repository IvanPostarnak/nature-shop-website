import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import H2 from './h2';
import styles from './H2.module.scss';

describe('H2 component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<H2/>);
    expect(container.getByTestId("h2")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<H2/>);
    expect(container.getByTestId("h2")).toBeVisible();
  });

  it('Should [render passed value] on render', () => {
    const container = render(<H2>{'value'}</H2>);
    expect(container.getByText('value')).toBeVisible();
  });

  it('Should [have CSS class] \'h2\' on render', () => {
    const container = render(<H2/>);
    expect(container.getByTestId("h2")).toHaveClass(styles.h2);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<H2/>);
    expect(container.getByTestId("h2")).toMatchSnapshot();
  });

});