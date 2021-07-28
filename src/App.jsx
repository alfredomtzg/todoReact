import { useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';
export function App() {
  const [todo, setTodo] = useState([
    { id: 1, task: "Tarea 1", completed: false },
    // { id: 2, task: "Tarea 2", completed: true },
    // { id: 3, task: "Tarea 3", completed: false },
  ]);
  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const tasks = todoTaskRef.current.value;
    if (tasks === "") return;
    setTodo((prevTodos) => {
      return [ ...prevTodos, { id: uuidv4(), tasks, completed: false }];
    });
  };

  return (
    <>
      <TodoList todos={todo} />
      <input ref={todoTaskRef} type="text" placeholder=" Nueva tarea" />
      <button onClick={handleTodoAdd}>+</button>
      <button type="button">-</button>
    </>
  );
}
