import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <button
      className="bg-blue-400 text-amber-50 rounded-md p-2.5 hover:cursor-pointer hover:brightness-95 font-bold hover:shadow-md"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
