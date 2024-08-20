import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { TodoData } from "./models/TodoData";

function App() {
  const [todos, setTodos] = useState<TodoData[]>(() =>
    JSON.parse(localStorage.getItem("todos") ?? "[]")
  );

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)));

  return (
    <>
      <h1 className="header">TODO APP</h1>
      <Form
        onClick={(name) => setTodos([...todos, { name, completed: false }])}
      />
      <ul className="list">
        {todos.map((todo) => (
          <Todo
            data={todo}
            onChecked={() =>
              setTodos(
                todos.map((e) =>
                  e === todo
                    ? { name: todo.name, completed: !todo.completed }
                    : e
                )
              )
            }
            onDelete={() => setTodos(todos.filter((e) => e != todo))}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
