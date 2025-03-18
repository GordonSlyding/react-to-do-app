import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";

// TODO: CreatedAt
const ToDoItem = ({ id, title, isDone, createdAt, toggleStatus }) => {
  return (
    <div className="flex flex-row p-3 bg-white rounded-md w-3xl mb-1.5">
      <div className="flex mr-5 items-center">
        <input
          className="size-7 focus:ring-blue-500 "
          type="checkbox"
          defaultChecked={isDone}
          onChange={() => toggleStatus(id)}
        ></input>
      </div>
      <div>
        <span className="font-mono leading-0.5">{title}</span> <br />
        <span className="text-gray-400 italic text-sm">{createdAt}</span>
      </div>
      <div className="flex flex-row gap-3.5 text-black ml-auto ">
        <div className="bg-gray-300 rounded-md hover:bg-red-400 hover:cursor-pointer text-2xl p-3 group">
          <RiDeleteBin6Fill className="group-hover:text-amber-50" />
        </div>
        <div className="bg-gray-300 rounded-md hover:bg-amber-200 hover:cursor-pointer text-xl px-[14px] py-3 group">
          <FaPen className="group-hover:text-amber-50" />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
