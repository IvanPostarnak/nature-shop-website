import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import ListItem from './ListItem';
import styles from './ListItem.module.scss';

describe('ListItem component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<ListItem />);
    expect(container.getByTestId('list-item')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<ListItem />);
    expect(container.getByTestId('list-item')).toBeVisible();
  });

  it("Should [have CSS class] 'list_item' on render", () => {
    const container = render(<ListItem />);
    expect(container.getByTestId('list-item')).toHaveClass(styles.list_item);
  });

  it('Should [render] without children', () => {
    const container = render(<ListItem></ListItem>);
    expect(container.getByTestId('list-item')).toBeInTheDocument();
  });

  it('Should [render passing title] props on render', () => {
    const container = render(<ListItem title={'title'} />);
    expect(container.getByText('title')).toBeInTheDocument();
  });

  it('Should [render passing body] props on render', () => {
    const container = render(<ListItem body={'body'} />);
    expect(container.getByText('body')).toBeInTheDocument();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<ListItem />);
    expect(container.getByTestId('list-item')).toMatchSnapshot();
  });
});
