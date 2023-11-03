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

  it("Expect todo to render on page ", function () {
    const { container } = render(<Todo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }} />);
    // const todo = container.querySelector('div')
    const todo = container.querySelector('div')
    expect(todo).toContainHTML("Write some code");
    expect(todo).toContainHTML("Code!");

  });

});