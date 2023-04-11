import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test('renders without crashing', () => {
  render(<App />);
});

test('snapshots match', function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot()
})