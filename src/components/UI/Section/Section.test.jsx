import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Section from './Section';
import styles from './Section.module.css';

describe('Section component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Section />);
    expect(container.getByTestId('section')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Section />);
    expect(container.getByTestId('section')).toBeVisible();
  });

  it("Should [have CSS class] 'section' on render", () => {
    const container = render(<Section />);
    expect(container.getByTestId('section')).toHaveClass(styles.section);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Section />);
    expect(container.getByTestId('section')).toMatchSnapshot();
  });
});
