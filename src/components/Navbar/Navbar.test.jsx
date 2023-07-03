import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { renderWithMemoryRouterAndProvider } from 'tests/helpers/renderWithMemoryRouterAndProvider';
import Navbar from './Navbar';
import styles from './Navbar.module.scss';
import underlined from './underlined.module.scss';

describe('Navbar component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getByTestId("navbar")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getByTestId("navbar")).toBeVisible();
  });

  it('Should [have CSS class] \'navbar\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getByTestId("navbar")).toHaveClass(styles.navbar);
  });

  it('Should [have CSS class] \'default\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getByTestId("navbar-link")).toHaveClass(underlined.default);
  });

  it('Should [have at least 1] navbar-link', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getAllByTestId("navbar-link").length).toBeGreaterThanOrEqual(1);
  });

  it('Should [match snapshot] \'navbar\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ["/"],
      <Navbar device={device}/>
    );
    expect(container.getByTestId("navbar")).toMatchSnapshot();
  });

});