import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-opacity-80 hover:backdrop-blur-md transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
