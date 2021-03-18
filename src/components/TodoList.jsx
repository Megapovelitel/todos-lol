import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div>
      {todos.length > 0
        ? todos.map((todo, idx) => {
            return (
              <TodoItem key={idx} todo={todo} idx={idx} dispatch={dispatch} />
            );
          })
        : "No todos"}
    </div>
  );
};

export default TodoList;
