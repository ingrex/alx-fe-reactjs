import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form" className="flex gap-2">
      <input
        placeholder="Enter new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="todo-input"
        className="border p-2 rounded flex-1"
      />
      <button type="submit" data-testid="add-button" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}
