import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled />);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should have tag <a>", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" />
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should have props isLoading", () => {
  const { container, getByText } = render(<Button isLoading />);

  expect(container.querySelector("span")).toBeInTheDocument();
  expect(getByText(/loading/i)).toBeInTheDocument();
});
