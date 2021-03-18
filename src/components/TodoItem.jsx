import React from "react";

const TodoItem = ({ todo, idx, dispatch }) => {
  console.log(todo.editMode);

  return (
    <div
      className={
        todo.completed ? "todo noselect todo_completed" : "noselect todo"
      }
    >
      {!todo.editMode ? (
        <h1
          onClick={() => dispatch({ type: "toggle-todo", payload: idx })}
          className={
            todo.completed ? "todo-title todo-title_completed" : "todo-title"
          }
        >
          {todo.title}
        </h1>
      ) : (
        <input
          defaultValue={todo.title}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({
                type: "finish-edit",
                payload: { idx: idx, title: e.target.value },
              });
            }
          }}
        ></input>
      )}

      <div className="btn-container">
        <button
          type="button"
          className="btn btn-danger mr-2"
          onClick={() => {
            dispatch({ type: "start-edit", payload: idx });
          }}
        >
          Edit
        </button>
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
    </div>
  );
};

export default TodoItem;
