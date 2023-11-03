import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo component", function () {
  it("renders without crashing", function () {
    render(<Todo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }} />);
    expect(container).toMatchSnapshot();
  });

  
});