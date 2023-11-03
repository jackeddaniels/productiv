import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer renders", function () {
  it("renders without crashing", function () {
    render(<Footer />);
  });

  it("matches snapshot", function () {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it("has correct footer data", function () {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(container).toContainHTML('Prødutïv is copyright ©2020')
  });
});

