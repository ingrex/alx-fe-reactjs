import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new todo"
        className="border p-2 flex-1 rounded"
        data-testid="todo-input"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        data-testid="add-button"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
