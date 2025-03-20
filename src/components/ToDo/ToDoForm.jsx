import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useToDoContext } from "../../context/ToDoContext";

const ToDoForm = () => {
  const inputRef = useRef(null);
  const { handleAdd } = useToDoContext();

  const handleSubmit = () => {
    const toDoTitle = inputRef.current.value;

    if (toDoTitle.trim()) {
      handleAdd(toDoTitle);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-row p-3 bg-white rounded-md w-full mb-9 border-zinc-100 border-1 shadow-md">
      <input
        type="text"
        placeholder="Enter here"
        className="bg-gray-100 text-md font-mono border border-gray-400 rounded-md p-1.5 w-full focus:border-blue-500"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      ></input>
      <div
        className="bg-gray-300 rounded-md hover:bg-green-400 hover:cursor-pointer text-2xl p-3 group ml-3"
        onClick={handleSubmit}
      >
        <FaCheck className="group-hover:text-amber-50" />
      </div>
    </div>
  );
};

export default ToDoForm;
