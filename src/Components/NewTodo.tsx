import React, { FormEvent, KeyboardEvent, memo, useState } from "react";
import { ReactComponent as ArrowDownIcon } from "../Assets/icons/arrow-down.svg";
import { useDispatch } from "../Store/StoreProvider";

const NewTodo = () => {
  const dispatch = useDispatch();

  const [todoText, setToDoText] = useState("");

  const handleTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setToDoText(e.currentTarget.value);
  };

  const handleAddTodo = () => {
    if (!todoText) {
      return;
    }
    setToDoText("");
    dispatch({ type: "ADD_TODO", payload: todoText });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="flex items-center gap-4 border-b-2 border-b-site-gray-100 p-5">
      <ArrowDownIcon
        onClick={handleAddTodo}
        className="w-5 h-5 fill-site-black-30 hover:fill-site-black-100 transition-all cursor-pointer select-none"
      />
      <input
        value={todoText}
        onChange={handleTodoTextChange}
        onKeyDown={handleKeyDown}
        className="focus:outline-none w-full italic placeholder:text-site-black-50 text-xl"
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default memo(NewTodo);
