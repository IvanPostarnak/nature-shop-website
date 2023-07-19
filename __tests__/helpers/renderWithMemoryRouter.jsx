import {render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

export const renderWithMemoryRouter = (initialEntries = ['/'], component) => {
  return render(<MemoryRouter initialEntries={[...initialEntries]}>{component}</MemoryRouter>);
};
