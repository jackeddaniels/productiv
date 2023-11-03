import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

