import { generateUniqueId } from "../Helpers/generateUniqueId";

export type todoItemType = {
  id: string;
  todoText: string;
  isDone: boolean;
};

export type filterType = "All" | "Active" | "Completed";

export type todoListType = {
  todoList: todoItemType[];
  filter: filterType;
};

export type ActionType =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: todoItemType }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "CHECK_ALL_TODOS" }
  | { type: "CHANGE_FILTER"; payload: filterType };

export const initialState: todoListType = {
  todoList: [
    { id: "1", isDone: false, todoText: "test1" },
    { id: "2", isDone: true, todoText: "test2" },
    { id: "3", isDone: false, todoText: "test3" },
  ],
  filter: "All",
};

export const todoReducer = (
  state = initialState,
  action: ActionType
): todoListType => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todoList: [
        ...state.todoList,
        { id: generateUniqueId(), isDone: false, todoText: action.payload },
      ],
    };
  }
  if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todoList: state.todoList.filter((todo) => todo.id !== action.payload),
    };
  }
  if (action.type === "EDIT_TODO") {
    return {
      ...state,
      todoList: state.todoList.map((todo) => {
        if (action.payload.id === todo.id) {
          return action.payload;
        } else {
          return todo;
        }
      }),
    };
  }
  if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todoList: state.todoList.map((todo) => {
        if (action.payload === todo.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      }),
    };
  }
  if (action.type === "CHECK_ALL_TODOS") {
    return {
      ...state,
      todoList: state.todoList.map((todo) => {
        return { ...todo, isDone: true };
      }),
    };
  }
  if (action.type === "CHANGE_FILTER") {
    return {
      ...state,
      filter: action.payload,
    };
  }

  return state;
};
