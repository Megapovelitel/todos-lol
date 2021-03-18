const todoReducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: [
          ...state.todos,
          { title: state.value, completed: false, editMode: false },
        ],
        value: "",
      };
    case "delete-todo":
      return {
        ...state,
        todos: state.todos.filter((i, idx) => {
          console.log(state.todos);
          return idx !== action.payload;
        }),
      };
    case "toggle-todo":
      return {
        ...state,
        todos: state.todos.map((i, idx) =>
          idx === action.payload ? { ...i, completed: !i.completed } : i
        ),
      };
    case "field":
      return {
        ...state,
        value: action.payload,
      };
    case "start-edit":
      return {
        ...state,
        todos: state.todos.map((i, idx) =>
          idx === action.payload ? { ...i, editMode: true } : i
        ),
      };
    case "finish-edit":
      return {
        ...state,
        todos: state.todos.map((i, idx) =>
          idx === action.payload.idx
            ? { ...i, editMode: false, title: action.payload.title }
            : i
        ),
      };
    default:
      console.log(
        `%c Wrong action type — ${action.type}`,
        "background: lightgrey; color: red; font-size: 24px; border: 1px solid black"
      );
      return state;
  }
};

export default todoReducer;
