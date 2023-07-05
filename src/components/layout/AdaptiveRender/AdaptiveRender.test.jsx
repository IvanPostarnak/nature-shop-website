import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithProvider } from 'tests/helpers/renderWithProvider';
import AdaptiveRender from './AdaptiveRender';
import styles from './AdaptiveRender.module.scss';

describe('AdaptiveRender set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <AdaptiveRender/>);
    expect(container.getByTestId("adaptive-render")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <AdaptiveRender/>);
    expect(container.getByTestId("adaptive-render")).toBeVisible();
  });

  it('Should [have CSS class] \'adaptive_render\' on render', () => {
    const container = renderWithProvider({}, <AdaptiveRender/>);
    expect(container.getByTestId("adaptive-render")).toHaveClass(styles.adaptive_render);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <AdaptiveRender/>);
    expect(container.getByTestId("adaptive-render")).toMatchSnapshot();
  });

  it('Should [render only SingleStructure] on Mobile', () => {
    const mobileDevice = {isMobile: true, isTablet: false, isDesktop: false};
    const container = renderWithProvider({device: mobileDevice}, <AdaptiveRender/>);
    expect(container.getByTestId("single-structure")).toBeInTheDocument();
    expect(container.getByTestId("single-structure")).toBeVisible();
    expect(container.queryByTestId("split-structure")).not.toBeInTheDocument();
  });

  it('Should [render only SplitStructure] on Tablet', () => {
    const tabDevice = {isMobile: false, isTablet: true, isDesktop: false};
    const tabContainer = renderWithProvider({device: tabDevice}, <AdaptiveRender/>);
    expect(tabContainer.queryByTestId("single-structure")).not.toBeInTheDocument();
    expect(tabContainer.getByTestId("split-structure")).toBeInTheDocument();
    expect(tabContainer.getByTestId("split-structure")).toBeVisible();
  });

  it('Should [render only SplitStructure] on Desktop', () => {
    const desktopDevice = {isMobile: false, isTablet: false, isDesktop: true};
    const desktopContainer = renderWithProvider({device: desktopDevice}, <AdaptiveRender/>);
    expect(desktopContainer.queryByTestId("single-structure")).not.toBeInTheDocument();
    expect(desktopContainer.getByTestId("split-structure")).toBeInTheDocument();
    expect(desktopContainer.getByTestId("split-structure")).toBeVisible();
  });
  
});