import { describe, it, expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import AppHolder from "./AppHolder";
import { renderWithProvider } from "tests/helpers/renderWithProvider";

describe.todo('AppHolder set of tests', () => {
  // mock window.matchMedia !
  afterEach(cleanup);

  it("Should [render AppHolder]", () => {
    const container = renderWithProvider({ device: {} }, <AppHolder/>);
    expect(container.getByTestId("app-holder")).toBeInTheDocument();
  });

  it("Should [match snapshot]", () => {
    const container = renderWithProvider({ device: {} }, <AppHolder/>);
    expect(() => container.getByTestId("app-holder")).toMatchSnapshot();
  });

})