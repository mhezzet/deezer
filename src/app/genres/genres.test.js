import React from "react";
import { render, waitForDomChange } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store";
import Genres from ".";

test("renders Genres", async () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <Genres />
      </Router>
    </Provider>
  );

  expect(getByTestId("loading")).toBeInTheDocument();

  await waitForDomChange();

  expect(getByTestId("genres")).toBeInTheDocument();
});
