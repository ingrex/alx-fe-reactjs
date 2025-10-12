import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice coding", completed: true },
  ]);

  // Add Todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Todo List</h2>
      <AddTodoForm addTodo={addTodo} />

      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded cursor-pointer ${
              todo.completed ? "bg-green-100 line-through" : "bg-gray-50"
            }`}
            onClick={() => toggleTodo(todo.id)}
            data-testid={`todo-${todo.id}`}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              data-testid={`delete-${todo.id}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
