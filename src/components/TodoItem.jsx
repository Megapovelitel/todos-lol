import React from "react";

const TodoItem = ({ todo, idx, dispatch }) => {
  return (
    <div
      className={
        todo.completed ? "todo noselect todo_completed" : "noselect todo"
      }
      onClick={() => dispatch({ type: "toggle-todo", payload: idx })}
    >
      <h1
        className={
          todo.completed ? "todo-title todo-title_completed" : "todo-title"
        }
      >
        {todo.title}
      </h1>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "delete-todo", payload: idx });
        }}
      >
        -
      </button>
    </div>
  );
};

export default TodoItem;
