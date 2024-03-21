import React from "react";

const Button = ({ text, onClick, bgColor }) => {
  const buttonStyles = {
    backgroundColor: bgColor,
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.25rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };
  return (
    <button onClick={onClick} style={buttonStyles}>
      {text}
    </button>
  );
};

export default Button;
