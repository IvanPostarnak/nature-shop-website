import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Br from './Br';
import styles from './Br.module.scss';

describe('Br component set of tests', () => {

  afterEach(cleanup);

  it('Should [be visible] on render', () => {
    const container = render(<Br/>);
    expect(container.getByTestId("br")).toBeVisible();
  });

  it('Should [have CSS class] \'br\' on render', () => {
    const container = render(<Br/>);
    expect(container.getByTestId("br")).toHaveClass(styles.br);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Br/>);
    expect(container.getByTestId("br")).toMatchSnapshot();
  });

});