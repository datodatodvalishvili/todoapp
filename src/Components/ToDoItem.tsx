import React, {
  FormEvent,
  KeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { ReactComponent as CheckIcon } from "../Assets/icons/check-icon.svg";
import { ReactComponent as CrossIcon } from "../Assets/icons/cross-icon.svg";
import { ReactComponent as EditIcon } from "../Assets/icons/edit-pencil-icon.svg";
import { useDispatch } from "../Store/StoreProvider";
import { todoItemType } from "../Store/todoReducer";

const ToDoItem = ({ id, isDone, todoText }: todoItemType) => {
  const dispatch = useDispatch();

  const [isEditable, setIsEditable] = useState(false);
  const [todoTextInput, setTodoTextInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const todo = { id, isDone, todoText };

  useEffect(() => {
    if (isEditable) {
      inputRef.current?.focus();
    }
  }, [isEditable]);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: todo.id });
  };

  const handleTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setTodoTextInput(e.currentTarget.value);
  };

  const handleToggleEdit = () => {
    setTodoTextInput(todo.todoText);
    setIsEditable((prev) => {
      if (prev)
        dispatch({
          type: "EDIT_TODO",
          payload: { ...todo, todoText: todoTextInput },
        });
      return !prev;
    });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_TODO", payload: todo.id });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleToggleEdit();
    }
  };

  return (
    <div
      className={`flex items-center gap-3 border-b-2 border-b-site-gray-100 px-3 py-5  text-xl ${
        todo.isDone ? "text-site-black-50 line-through" : ""
      }`}
    >
      <div
        onClick={handleToggle}
        className="border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        {todo.isDone ? (
          <CheckIcon className="w-6 h-6 fill-site-green-100 select-none" />
        ) : null}
      </div>
      <input
        ref={inputRef}
        disabled={!isEditable}
        value={isEditable ? todoTextInput : todo.todoText}
        onChange={handleTodoTextChange}
        onKeyDown={handleKeyDown}
        className={`flex-1 break-all cursor-pointer bg-white p-2 ${
          isEditable ? "outline outline-site-gray-100" : "outline-none"
        }`}
      />

      <CrossIcon
        onClick={handleRemove}
        className="w-6 h-6 stroke-site-red-100 hover:stroke-site-red-50 select-none transition-all cursor-pointer"
      />
      <EditIcon
        onClick={handleToggleEdit}
        className="w-6 h-6 stroke-site-black-100 hover:stroke-site-black-50 select-none transition-all cursor-pointer"
      />
    </div>
  );
};

export default memo(ToDoItem);
