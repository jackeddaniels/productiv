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
});