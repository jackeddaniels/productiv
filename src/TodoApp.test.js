import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("TodoApp component", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoApp initialTodos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]} />);
    expect(container).toMatchSnapshot();
  });

  
});