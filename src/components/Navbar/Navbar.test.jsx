import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithMemoryRouterAndProvider} from 'tests/helpers/renderWithMemoryRouterAndProvider';
import {NAVBAR} from 'app/routes/routes';
import Navbar from './Navbar';
import styles from './Navbar.module.css';
import underlined from './underlined.module.css';

describe('Navbar component set of tests', () => {
  afterEach(cleanup);

  it('Should [have at least 1] navbar route', () => {
    expect(NAVBAR.length).toBeGreaterThanOrEqual(1);
  });

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    expect(container.getByTestId('navbar')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    expect(container.getByTestId('navbar')).toBeVisible();
  });

  it("Should [have CSS class] 'navbar' on render", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    expect(container.getByTestId('navbar')).toHaveClass(styles.navbar);
  });

  it("Should [have CSS class] 'default' on render", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    const atLeastOneDefault = container.getAllByTestId('navbar-link').some((item) => {
      return item.classList.contains(underlined.default);
    });
    expect(atLeastOneDefault).toBe(true);
  });

  it("Should [have CSS class] 'active' on render", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    const atLeastOneActive = container.getAllByTestId('navbar-link').some((item) => {
      return item.classList.contains(underlined.active);
    });
    expect(atLeastOneActive).toBe(true);
  });

  it('Should [have at least 1] navbar-link', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    expect(container.getAllByTestId('navbar-link').length).toBeGreaterThanOrEqual(1);
  });

  it("Should [match snapshot] 'navbar' on render", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <Navbar device={device} />,
    );
    expect(container.getByTestId('navbar')).toMatchSnapshot();
  });
});
