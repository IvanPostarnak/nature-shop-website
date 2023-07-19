import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import HeaderWidget from './Header.widget';
import styles from './Header.module.scss';
import {renderWithMemoryRouterAndProvider} from 'tests/helpers/renderWithMemoryRouterAndProvider';

describe('Header.widget set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <HeaderWidget device={device} />,
    );
    expect(container.getByTestId('header-widget')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <HeaderWidget device={device} />,
    );
    expect(container.getByTestId('header-widget')).toBeVisible();
  });

  it("Should [have CSS class] 'header_widget' on render", () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <HeaderWidget device={device} />,
    );
    expect(container.getByTestId('header-widget')).toHaveClass(styles.header_widget);
  });

  it('Should [match snapshot] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const pages = {acitve: 'Home'};
    const container = renderWithMemoryRouterAndProvider(
      {device, pages},
      ['/'],
      <HeaderWidget device={device} />,
    );
    expect(container.getByTestId('header-widget')).toMatchSnapshot();
  });
});
