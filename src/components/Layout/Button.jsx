import React, { useState } from "react";

const Button = ({ name, onClick }) => {
  const [turnRed, setTurnRed] = useState(false);

  const handleClick = () => {
    setTurnRed(!turnRed);
    onClick();
  };

  return (
    <button
      className={` text-amber-50 rounded-md p-2.5 hover:cursor-pointer hover:brightness-95 font-bold hover:shadow-md ${
        turnRed ? "bg-red-400" : "bg-blue-400"
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
