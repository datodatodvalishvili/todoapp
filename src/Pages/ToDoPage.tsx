import React from "react";
import Card from "../Components/Card";
import ListFooter from "../Components/ListFooter";
import NewTodo from "../Components/NewTodo";
import ToDoList from "../Components/ToDoList";

function ToDoPage() {
  return (
    <div className="min-h-[100vh] bg-site-gray-100 font-thin text-site-black-100 py-9">
      <div className="flex flex-col gap-5 items-center justify-center h-full">
        <h1 className="text-site-red-100 text-7xl">todos</h1>
        <Card>
          <NewTodo />
          <ToDoList />
          <ListFooter />
        </Card>
      </div>
    </div>
  );
}

export default ToDoPage;
