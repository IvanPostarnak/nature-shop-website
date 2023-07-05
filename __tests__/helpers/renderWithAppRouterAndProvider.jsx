import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "app/AppRouter/AppRouter";
import { Provider } from "react-redux";
import { createReduxStore } from "store/store";

export const renderWithAppRouterAndProvider = (initialState, initialEntries=["/"], component) => {
  return render(
    <Provider store={createReduxStore(initialState)}>
      <MemoryRouter initialEntries={[...initialEntries]}>
        <AppRouter>
          {component}
        </AppRouter>
      </MemoryRouter>
    </Provider>
  );
};