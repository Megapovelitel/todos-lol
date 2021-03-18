import "./App.css";
import todoReducer from "./reducers/todoReducer";
import { useReducer } from "react";

import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const [{ todos, value }, dispatch] = useReducer(todoReducer, {
    todos: [],
    value: "",
  });

  return (
    <div className="container">
      <div className="inner-wrapper">
        TODO APP
        <Input value={value} dispatch={dispatch} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
