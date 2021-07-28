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
  const toggleTodo = (id) => {
    const newTodos = [...todo];
    const todos = newTodos.find((todo) => todo.id === id);
    todos.completed = !todos.completed;
    setTodo(newTodos);
  }

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;
    setTodo((prevTodos) => {
      return [ ...prevTodos, { id: uuidv4(), task, completed: false }];
    });
    todoTaskRef.current.value = '';
  };

  return (
    <>
      <TodoList todos={todo} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder=" Nueva tarea" />
      <button onClick={handleTodoAdd}>+</button>
      <button type="button">-</button>
    </>
  );
}
