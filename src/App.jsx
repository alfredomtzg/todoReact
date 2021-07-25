import { TodoList } from "./components/TodoList";

export function App() {
  return <TodoList todos={[
    { id: 1, task: "Tarea 1", completed: false },
    { id: 2, task: "Tarea 2", completed: true },
    { id: 3, task: "Tarea 3", completed: false }
  ]} />;
}
