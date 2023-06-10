import React, { useMemo } from "react";
import { useDispatch, useStore } from "../Store/StoreProvider";
import ListFilter from "./ListFilter/ListFilter";

const ListFooter = () => {
  const state = useStore();
  const dispatch = useDispatch();

  const itemsLeft = useMemo(() => {
    if (state.filter === "Completed") {
      return 0;
    } else {
      return state.todoList.filter((todo) => {
        return !todo.isDone;
      }).length;
    }
  }, [state.todoList, state.filter]);

  const handleMarkAll = () => {
    dispatch({ type: "CHECK_ALL_TODOS" });
  };

  return (
    <div className="flex items-center justify-between border-b-2 border-b-site-gray-100 py-3 px-5">
      <div>{itemsLeft} items left</div>
      <ListFilter />
      <div
        className="cursor-pointer hover:text-site-black-50"
        onClick={handleMarkAll}
      >
        Mark all completed
      </div>
    </div>
  );
};

export default ListFooter;
