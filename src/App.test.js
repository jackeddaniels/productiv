import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Footer from "./Footer";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("matches snapshot", function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it("contains expected Footer", function () {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(container).toContainHTML('Prødutïv is copyright ©2020')
  });

  // it ("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});

