import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";

const ToDoItem = () => {
  return (
    <div className="flex flex-row p-5 bg-white rounded-md w-3xl">
      <div className="flex mr-2.5 items-center">
        <input
          className="size-8 focus:ring-blue-500 "
          type="checkbox"
          value=""
        ></input>
      </div>
      <div className="mr-8">
        <span className="font-mono">Ins Fitnessstudio gehen</span> <br />
        <span className="text-gray-400 italic"> 12.23.21</span>
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
