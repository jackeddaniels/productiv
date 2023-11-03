import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]}/>);
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={[{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }]}/>);
    expect(container).toMatchSnapshot();
  });
});