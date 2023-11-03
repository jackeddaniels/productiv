import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  it("Edit and Delete button on page", function () {
    const { container } = render(<EditableTodo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }} />);
     const buttonList = container.querySelectorAll('button')
    expect(buttonList.length).toEqual(2)
    expect(buttonList[0]).toContainHTML('Edit')
    expect(buttonList[1]).toContainHTML('Del')
  });

  it("Form appears on page when edit is clicked", function () {
    const { container } = render(<EditableTodo todo={{
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    }} />);
    const editButton = container.querySelector('#editButton')

    fireEvent.click(editButton)

    const form = container.querySelector('#todo-form')

    expect(container.querySelector('Todo')).not.toBeInTheDocument()
    expect(form).toBeInTheDocument()
  });

});