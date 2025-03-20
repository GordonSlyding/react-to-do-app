import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const ToDoEdit = ({ onSubmit, onCancel, titleRefeference }) => {
  const inputRef = useRef(titleRefeference);

  const handleUpdate = () => {
    const toDoTitle = inputRef.current.value;

    if (toDoTitle.trim()) {
      onSubmit(toDoTitle);
      inputRef.current.value = "";
      onCancel();
    }
  };

  const handleKeyDown = (keyboardEvent) => {
    if (keyboardEvent.key === "Enter") {
      // Verhindert hier das Standartverhalten des Browsers
      keyboardEvent.preventDefault();
      handleUpdate();
    }
  };

  return (
    <div className="flex flex-row bg-white rounded-md w-3xl mb-1.5">
      <input
        type="text"
        placeholder="Enter here"
        className="bg-gray-100 text-md font-mono border border-gray-400 rounded-md p-1.5 w-full focus:border-blue-500"
        defaultValue={titleRefeference}
        ref={inputRef}
        onKeyDown={handleKeyDown}
      ></input>
      <div
        className="bg-gray-300 rounded-md hover:bg-green-400 hover:cursor-pointer text-2xl p-3 group ml-3"
        onClick={handleUpdate}
      >
        <FaCheck className="group-hover:text-amber-50" />
      </div>
      <div
        className="bg-gray-300 rounded-md hover:bg-red-400 hover:cursor-pointer text-2xl p-3 group ml-3"
        onClick={() => {
          onCancel();
        }}
      >
        <MdCancel />
      </div>
    </div>
  );
};

export default ToDoEdit;
