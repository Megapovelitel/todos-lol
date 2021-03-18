import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [...state.todos, { title: state.value, completed: false }],
        value: "",
      };
    case "del-todo":
      return {
        ...state,
        todos: state.todos.filter((i, idx) => idx !== action.payload),
      };
    case "field":
      return {
        ...state,
        value: action.payload,
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((i, idx) =>
          idx === action.payload ? { ...i, completed: !i.completed } : i
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [{ todos, value }, dispatch] = useReducer(reducer, {
    todos: [],
    value: "",
  });
  return (
    <div className="App">
      TODO APP
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
        <div>
          {todos.length > 0
            ? todos.map((i, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      textDecoration: i.completed ? "line-through" : "",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => dispatch({ type: "toggle", payload: idx })}
                  >
                    {i.title}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "del-todo", payload: idx });
                      }}
                    >
                      Del
                    </button>
                  </div>
                );
              })
            : "No todos"}
        </div>
      </form>
    </div>
  );
}

export default App;
