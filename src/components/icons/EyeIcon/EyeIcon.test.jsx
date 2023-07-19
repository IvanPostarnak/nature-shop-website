import {describe, it, expect, afterEach} from 'vitest';
import {render, cleanup} from '@testing-library/react';
import EyeIcon from './EyeIcon';

describe('EyeIcon component set of tests', () => {
  afterEach(cleanup);

  it('Should [be in DOM] on render', () => {
    const container = render(<EyeIcon />);
    expect(container.getByTestId('eye-icon')).toBeInTheDocument();
  });

  it('Should [be visible] on render', () => {
    const container = render(<EyeIcon />);
    expect(container.getByTestId('eye-icon')).toBeVisible();
  });

  it('Should [match snapshot] on render', () => {
    const container = render(<EyeIcon />);
    expect(container.getByTestId('eye-icon')).toMatchSnapshot();
  });
});
