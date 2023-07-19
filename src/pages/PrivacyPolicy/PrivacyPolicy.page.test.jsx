import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithProvider} from 'tests/helpers/renderWithProvider';
import PrivacyPolicy from './PrivacyPolicy.page';
import styles from './PrivacyPolicy.module.css';

describe('PrivacyPolicy.page set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = renderWithProvider({}, <PrivacyPolicy />);
    expect(container.getByTestId('privacy-policy-page')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = renderWithProvider({}, <PrivacyPolicy />);
    expect(container.getByTestId('privacy-policy-page')).toBeVisible();
  });

  it("Should [have CSS class] 'privacy_policy' on render", () => {
    const container = renderWithProvider({}, <PrivacyPolicy />);
    expect(container.getByTestId('privacy-policy-page')).toHaveClass(styles.privacy_policy);
  });

  it('Should [match snapshot] on render', () => {
    const container = renderWithProvider({}, <PrivacyPolicy />);
    expect(container.getByTestId('privacy-policy-page')).toMatchSnapshot();
  });
});
