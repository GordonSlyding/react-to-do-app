import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ToDoItem = () => {
  return (
    <div className="flex flex-row p-5 bg-white rounded-md">
      <div>
        Ins Fitnessstudio gehen <br /> 12.23.21
      </div>
      <div>
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};

export default ToDoItem;
