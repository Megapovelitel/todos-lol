import React from "react";

const Input = ({ value, dispatch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-todo" });
      }}
    >
      <input
        value={value}
        onChange={(e) => dispatch({ type: "field", payload: e.target.value })}
      />
    </form>
  );
};

export default Input;
