import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import {renderWithProvider} from 'tests/helpers/renderWithProvider';
import AppHolder from './AppHolder';
import styles from './AppHolder.module.scss';

describe.todo('AppHolder set of tests', () => {
  // mock window.matchMedia !
  afterEach(cleanup);

  it('Should [render AppHolder]', () => {
    const container = renderWithProvider({device: {}}, <AppHolder />);
    expect(container.getByTestId('app-holder')).toBeInTheDocument();
  });

  it("Should [have CSS class] 'holder' on render", () => {
    const container = renderWithProvider({device: {}}, <AppHolder />);
    expect(container.getByTestId('app-holder')).toHaveClass(styles.holder);
  });

  it('Should [match snapshot]', () => {
    const container = renderWithProvider({device: {}}, <AppHolder />);
    expect(() => container.getByTestId('app-holder')).toMatchSnapshot();
  });
});
