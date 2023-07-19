import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Span from './Span';
import styles from './Span.module.scss';

describe('Span component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Span>{'value'}</Span>);
    expect(container.getByTestId('span')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Span>{'value'}</Span>);
    expect(container.getByTestId('span')).toBeVisible();
  });

  it("Should [have CSS class] 'Span' on render", () => {
    const container = render(<Span>{'value'}</Span>);
    expect(container.getByTestId('span')).toHaveClass(styles.span);
  });

  it('Should [pass] without children', () => {
    const container = render(<Span />);
    expect(container.getByTestId('span')).toBeInTheDocument();
  });

  it("Should [pass] with '' empty string", () => {
    const container = render(<Span></Span>);
    expect(container.getByTestId('span')).toBeInTheDocument();
  });

  it('Should [have passed value] on render', () => {
    const container = render(<Span>{'value'}</Span>);
    expect(container.getByText('value')).toBeInTheDocument();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Span>{'value'}</Span>);
    expect(container.getByTestId('span')).toMatchSnapshot();
  });
});
