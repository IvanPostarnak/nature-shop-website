import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import LanguageBadge from './LanguageBadge';
import styles from './LanguageBadge.module.css';

describe('LanguageBadge component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<LanguageBadge />);
    expect(container.getByTestId('language-badge')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<LanguageBadge />);
    expect(container.getByTestId('language-badge')).toBeVisible();
  });

  it("Should [have CSS class] 'language_badge' on render", () => {
    const container = render(<LanguageBadge />);
    expect(container.getByTestId('language-badge')).toHaveClass(styles.language_badge);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<LanguageBadge />);
    expect(container.getByTestId('language-badge')).toMatchSnapshot();
  });
});
