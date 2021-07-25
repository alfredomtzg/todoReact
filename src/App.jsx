import { useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todo, setTodo] = useState([
    { id: 1, task: "Tarea 1", completed: false },
    { id: 2, task: "Tarea 2", completed: true },
    { id: 3, task: "Tarea 3", completed: false },
  ]);

  return (
    <>
      <TodoList todos={todo} />
      <input type="text" placeholder=" Nueva tarea" />
    </>
  );
}
