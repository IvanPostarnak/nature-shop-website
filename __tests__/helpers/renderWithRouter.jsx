import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "app/AppRouter/AppRouter";

export const renderWithRouter = (initialEntries=["/"], component) => {
  return render(
    <MemoryRouter initialEntries={[...initialEntries]}>
      <AppRouter>
        {component}
      </AppRouter>
    </MemoryRouter>
  );
};

