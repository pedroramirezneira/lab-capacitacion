import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState<string[]>(
    () => localStorage.getItem("todos")?.split(", ") ?? []
  );

  useEffect(() => localStorage.setItem("todos", todos.join(", ")));

  return (
    <>
      <h1>TODO APP</h1>
      <Form onClick={(name) => setTodos([...todos, name])} />
      {todos.map((todo) => (
        <Todo name={todo} />
      ))}
    </>
  );
}

export default App;
