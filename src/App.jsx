import { useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todo, setTodo] = useState([
    { id: 1, task: "Tarea 1", completed: false },
    { id: 2, task: "Tarea 2", completed: true },
    { id: 3, task: "Tarea 3", completed: false },
  ]);
  const handleTodoAdd = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
      <TodoList todos={todo} />
      <input type="text" placeholder=" Nueva tarea" />
      <button type="button" onClick={handleTodoAdd}> + </button>
      <button type="button"> - </button>
    </>
  );
}
