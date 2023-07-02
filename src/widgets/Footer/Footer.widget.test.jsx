import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import Footer from './Footer.widget';
import styles from './Footer.module.scss';

describe('Footer.widget set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toBeVisible();
  });

  it('Should [have CSS class] \'footer\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toHaveClass(styles.footer);
  });

  it('Should [match snapshot] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<Footer device={device}/>);
    expect(container.getByTestId("app-footer")).toMatchSnapshot();
  });

});