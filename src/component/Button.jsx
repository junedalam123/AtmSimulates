import React from "react";

const Button = ({ text, onClick,bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor}-500 text-white px-4 py-2 rounded`}
    >
      {text}
    </button>
  );
};

export default Button;
