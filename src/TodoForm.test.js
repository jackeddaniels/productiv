import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm component", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoForm />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoForm />);
    const form = container.querySelectorAll('.NewTodoForm')
   
  });
});