import React from "react";
import { useStore } from "../Store/StoreProvider";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const state = useStore();

  const filteredTodoList = state.todoList.filter((todo) => {
    if (state.filter === "All") {
      return true;
    } else {
      return state.filter === "Active" ? !todo.isDone : todo.isDone;
    }
  });

  return (
    <div className="">
      {filteredTodoList.map((todo) => {
        return (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            isDone={todo.isDone}
            todoText={todo.todoText}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
