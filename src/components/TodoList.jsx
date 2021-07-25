import React from "react";

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}> {todo.task}</li>
      ))}
    </ul>
  );
}
