import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "src/app/AppRouter/AppRouter";
import { createReduxStore } from "src/store/store";

export const renderWithRouterAndProvider = (intiialState, initialEntries=["/"], component) => {
  return render(
    <Provider store={createReduxStore(intiialState)}>
      <MemoryRouter initialEntries={[...initialEntries]}>
        <AppRouter>
          {component}
        </AppRouter>
      </MemoryRouter>
    </Provider>
  );
};