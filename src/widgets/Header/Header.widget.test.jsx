import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import Header from './Header.widget';
import styles from './Header.module.scss';
import { renderWithMemoryRouter } from 'tests/helpers/renderWithMemoryRouter';

describe('Header.widget set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = renderWithMemoryRouter(["/"], <Header device={device}/>);
    expect(container.getByTestId("app-header")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = renderWithMemoryRouter(["/"], <Header device={device}/>);
    expect(container.getByTestId("app-header")).toBeVisible();
  });

  it('Should [have CSS class] \'header\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = renderWithMemoryRouter(["/"], <Header device={device}/>);
    expect(container.getByTestId("app-header")).toHaveClass(styles.header);
  });

  it('Should [match snapshot] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = renderWithMemoryRouter(["/"], <Header device={device}/>);
    expect(container.getByTestId("app-header")).toMatchSnapshot();
  });

});