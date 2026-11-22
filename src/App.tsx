import { todos } from "./data";
import { TodoList } from "./components/TodoList";

export default function App() {
  return (
    <>
      <h1>React TODO</h1>
      <TodoList todos={todos} />
    </>
  );
}