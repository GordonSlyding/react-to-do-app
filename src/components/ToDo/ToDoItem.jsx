import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import ToDoEdit from "./ToDoEdit";
import { useToDoContext } from "../../context/ToDoContext";

const ToDoItem = ({ id, title, isDone, createdAt }) => {
  // States
  const [toggleEdit, setEdit] = useState(false);
  const { toggleStatus, handleDelete, handleUpdate } = useToDoContext();

  return (
    <div className="flex flex-row p-3 bg-white rounded-md w-3xl border-1 border-zinc-200 shadow-md">
      {toggleEdit ? (
        <>
          <ToDoEdit
            onSubmit={(newTitle) => {
              handleUpdate(id, newTitle);
            }}
            onCancel={() => {
              setEdit(false);
            }}
            titleRefeference={title}
          />
        </>
      ) : (
        <>
          <div className="flex mr-5 items-center">
            <input
              className="size-7 focus:ring-blue-500 "
              type="checkbox"
              defaultChecked={isDone}
              onChange={() => toggleStatus(id)}
            ></input>
          </div>
          <div>
            {isDone ? (
              <>
                <span className="font-mono leading-0.5 line-through">
                  {title}
                </span>
                <br />
              </>
            ) : (
              <>
                <span className="font-mono leading-0.5">{title}</span>
                <br />
              </>
            )}

            <span className="text-gray-400 italic text-sm">{createdAt}</span>
          </div>
          <div className="flex flex-row gap-3.5 text-black ml-auto ">
            <div
              className="bg-gray-300 rounded-md hover:bg-red-400 hover:cursor-pointer text-2xl p-3 group"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <RiDeleteBin6Fill className="group-hover:text-amber-50" />
            </div>
            <div
              className="bg-gray-300 rounded-md hover:bg-amber-200 hover:cursor-pointer text-xl px-[14px] py-3 group"
              onClick={() => {
                setEdit(true);
              }}
            >
              <FaPen className="group-hover:text-amber-50" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
