import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <Form onClick={(name) => setTodos([...todos, name])} />
      {todos.map((todo) => (
        <Todo name={todo} />
      ))}
    </>
  );
}

export default App;
