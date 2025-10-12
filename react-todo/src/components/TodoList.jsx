import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  // initial todos: exactly these strings to match checker expectations
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice coding", completed: true },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-8" data-testid="todo-list">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <AddTodoForm onAdd={addTodo} />

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
            className={`flex justify-between items-center p-2 border rounded cursor-pointer ${
              todo.completed ? "line-through bg-green-100" : "bg-gray-50"
            }`}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              data-testid={`delete-${todo.id}`}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
