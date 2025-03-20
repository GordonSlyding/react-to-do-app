import React from "react";
import { useToDoContext } from "../../context/ToDoContext";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { toDos } = useToDoContext();

  return (
    <div className="flex flex-col bg-blue-50 p-6 rounded-xl gap-6 shadow-2xl">
      {toDos.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          id={toDo.id}
          title={toDo.title}
          isDone={toDo.isDone}
          createdAt={toDo.createdAt}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoList;
