import React, { useState } from "react";

const Button = ({ name, onClick }) => {
  const [turnRed, setTurnRed] = useState(false);

  const handleClick = () => {
    setTurnRed(!turnRed);
    onClick();
  };

  return (
    <button
      className={`${
        turnRed ? "bg-gray-400" : "bg-blue-400"
      } text-amber-50 p-2.5 hover:cursor-pointer hover:brightness-95 font-bold mb-4 rounded-3xl hover:shadow-md hover:rounded-md transition-all duration-200 ease-linear`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
