import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import ReactIcon from './ReactIcon';

describe('ReactIcon component set of tests', () => {

  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<ReactIcon/>);
    expect(container.getByTestId("react-icon")).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<ReactIcon/>);
    expect(container.getByTestId("react-icon")).toBeVisible();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<ReactIcon/>);
    expect(container.getByTestId("react-icon")).toMatchSnapshot();
  });

});