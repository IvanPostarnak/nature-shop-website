import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Strong from './Strong';
import styles from './Strong.module.scss';

describe('Strong component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Strong>{'value'}</Strong>);
    expect(container.getByTestId('strong')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Strong>{'value'}</Strong>);
    expect(container.getByTestId('strong')).toBeVisible();
  });

  it("Should [have CSS class] 'strong' on render", () => {
    const container = render(<Strong>{'value'}</Strong>);
    expect(container.getByTestId('strong')).toHaveClass(styles.strong);
  });

  it('Should [pass] without children', () => {
    const container = render(<Strong />);
    expect(container.getByTestId('strong')).toBeInTheDocument();
  });

  it("Should [pass] with '' empty string", () => {
    const container = render(<Strong></Strong>);
    expect(container.getByTestId('strong')).toBeInTheDocument();
  });

  it('Should [have passing value] on render', () => {
    const container = render(<Strong>{'value'}</Strong>);
    expect(container.getByText('value')).toBeInTheDocument();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Strong>{'value'}</Strong>);
    expect(container.getByTestId('strong')).toMatchSnapshot();
  });
});
