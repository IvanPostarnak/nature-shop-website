import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Text from './Text';
import styles from './Text.module.scss';

describe('Text component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Text>{'value'}</Text>);
    expect(container.getByTestId('text')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Text>{'value'}</Text>);
    expect(container.getByTestId('text')).toBeVisible();
  });

  it("Should [have CSS class] 'text' on render", () => {
    const container = render(<Text>{'value'}</Text>);
    expect(container.getByTestId('text')).toHaveClass(styles.text);
  });

  it('Should [pass] without children', () => {
    const container = render(<Text />);
    expect(container.getByTestId('text')).toBeInTheDocument();
  });

  it("Should [pass] with '' empty string", () => {
    const container = render(<Text></Text>);
    expect(container.getByTestId('text')).toBeInTheDocument();
  });

  it('Should [have passed value] on render', () => {
    const container = render(<Text>{'value'}</Text>);
    expect(container.getByText('value')).toBeInTheDocument();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Text>{'value'}</Text>);
    expect(container.getByTestId('text')).toMatchSnapshot();
  });
});
