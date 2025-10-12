import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component Tests", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice coding")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-button");

    await user.type(input, "New Todo");
    await user.click(addBtn);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion by clicking the todo item", async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const todoItem = screen.getByText("Learn React");
    await user.click(todoItem);

    const li = screen.getByTestId("todo-1");
    expect(li).toHaveClass("line-through");
  });

  test("deletes a todo when delete button is clicked", async () => {
    render(<TodoList />);
    const user = userEvent.setup();

    const deleteBtn = screen.getByTestId("delete-1");
    await user.click(deleteBtn);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
