import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import Paragraph from './Paragraph';
import styles from './Paragraph.module.scss';

describe('Paragraph component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<Paragraph />);
    expect(container.getByTestId('paragraph')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<Paragraph />);
    expect(container.getByTestId('paragraph')).toBeVisible();
  });

  it('Should [render passed title] on render', () => {
    const container = render(<Paragraph title='title' />);
    expect(container.getByText('title')).toBeInTheDocument();
    expect(container.getByText('title')).toBeVisible();
  });

  it('Should [render passed body] on render', () => {
    const container = render(<Paragraph body='body' />);
    expect(container.getByText('body')).toBeInTheDocument();
    expect(container.getByText('body')).toBeVisible();
  });

  it("Should [have CSS class] 'Paragraph' on render", () => {
    const container = render(<Paragraph />);
    expect(container.getByTestId('paragraph')).toHaveClass(styles.paragraph);
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<Paragraph />);
    expect(container.getByTestId('paragraph')).toMatchSnapshot();
  });
});
