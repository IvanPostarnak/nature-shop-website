import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Shelf from './Shelf';
import styles from './Shelf.module.scss';

describe('Shelf component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Shelf/>);
    expect(container.getByTestId("app-shelf")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Shelf/>);
    expect(container.getByTestId("app-shelf")).toBeVisible();
  });

  it('Should [match snapshot] on normal render', () => {
    const container = render(<Shelf layout='bottom'/>);
    expect(container.getByTestId("app-shelf")).toMatchSnapshot();
  });

  it('Should [have CSS class] \'bottom\' on passing \'layout=bottom\'', () => {
    const container = render(<Shelf layout='bottom'/>);
    expect(container.getByTestId("app-shelf")).toHaveClass(styles.bottom);
  });  

  it('Should [match snapshot] on passing \'layout=bottom\'', () => {
    const container = render(<Shelf layout='bottom'/>);
    expect(container.getByTestId("app-shelf")).toMatchSnapshot();
  });

});