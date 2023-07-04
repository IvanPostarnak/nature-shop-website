import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import H4 from './H4';
import styles from './H4.module.scss';

describe('H4 component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<H4/>);
    expect(container.getByTestId("h4")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<H4/>);
    expect(container.getByTestId("h4")).toBeVisible();
  });

  it('Should [render passed value] on render', () => {
    const container = render(<H4>{'value'}</H4>);
    expect(container.getByText('value')).toBeVisible();
  });

  it('Should [have CSS class] \'H4\' on render', () => {
    const container = render(<H4/>);
    expect(container.getByTestId("h4")).toHaveClass(styles.h4);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<H4/>);
    expect(container.getByTestId("h4")).toMatchSnapshot();
  });

});