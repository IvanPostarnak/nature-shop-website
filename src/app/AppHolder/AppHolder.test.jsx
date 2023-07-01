import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import AppHolder from "./AppHolder";

describe('AppHolder set of tests', () => {

  afterEach(() => cleanup());

  it("Should [render AppHolder] on correct props", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<AppHolder device={device}/>);
    expect(container.getByTestId("app-holder")).toBeInTheDocument();
  });

  it("Should [match snapshot] on correnct props", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<AppHolder device={device}/>);
    expect(() => container.getByTestId("app-holder")).toMatchSnapshot();
  });

})