import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

describe("EditableTodoList component", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]} />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    }]} />);

    const todoList = container.querySelector('div')

    expect(todoList).toContainHTML('Write some code')
    expect(todoList).toContainHTML('Cook something healthy')
  });
});