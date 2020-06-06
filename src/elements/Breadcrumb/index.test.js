import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./index.js";

const setup = () => {
  const listBreadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={listBreadcrumb} />
    </Router>
  );

  const breadcrumb = container.querySelector(".breadcrumb");

  return {
    breadcrumb,
  };
};

test("should have tag <ol> with className .breadcrumb, and Text  Home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
