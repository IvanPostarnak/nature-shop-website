import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithProvider} from 'tests/helpers/renderWithProvider';
import AboutUs from './AboutUs.page';
import styles from './AboutUs.module.css';

describe('AboutUs.page set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <AboutUs />);
    expect(container.getByTestId('about-us-page')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <AboutUs />);
    expect(container.getByTestId('about-us-page')).toBeVisible();
  });

  it("Should [have CSS class] 'about_us' on render", () => {
    const container = renderWithProvider({}, <AboutUs />);
    expect(container.getByTestId('about-us-page')).toHaveClass(styles.about_us);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <AboutUs />);
    expect(container.getByTestId('about-us-page')).toMatchSnapshot();
  });
});
