import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }} />);
    expect(container).toMatchSnapshot();
  });
});