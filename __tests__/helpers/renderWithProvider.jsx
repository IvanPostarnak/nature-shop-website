import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createReduxStore } from "src/store/store"

export const renderWithProvider = (initialState, component) => {
  return render(
    <Provider store={createReduxStore(initialState)}>
      {component}
    </Provider>
  );
};