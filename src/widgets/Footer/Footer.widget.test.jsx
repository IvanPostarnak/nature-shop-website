import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import FooterWidget from './Footer.widget';
import styles from './Footer.module.scss';

describe('Footer.widget set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<FooterWidget device={device}/>);
    expect(container.getByTestId("footer-widget")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<FooterWidget device={device}/>);
    expect(container.getByTestId("footer-widget")).toBeVisible();
  });

  it('Should [have CSS class] \'footer_widget\' on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<FooterWidget device={device}/>);
    expect(container.getByTestId("footer-widget")).toHaveClass(styles.footer_widget);
  });

  it('Should [match snapshot] on render', () => {
    const device = {isMobile: false, isTablet: false, isDesktop: true};
    const container = render(<FooterWidget device={device}/>);
    expect(container.getByTestId("footer-widget")).toMatchSnapshot();
  });

});