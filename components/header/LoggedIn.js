import React from "react";
import Button from "../Button";

const LoggedIn = ({ isLoggedIn, userName, openModal }) => {
  return (
    <div className="hidden lg:flex items-center lg:mt-0 space-y-4 lg:space-y-0 lg:space-x-8">
      {isLoggedIn ? (
        <span className="text-gray-500 text-sm">Welcome, {userName}!</span>
      ) : (
        <>
          <button
            className="text-gray-500 hover:text-white text-sm"
            onClick={() => openModal(false)}
          >
            Sign Up
          </button>
          <Button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition text-sm"
            onClick={() => openModal(true)}
          >
            Log In
          </Button>
        </>
      )}
    </div>
  );
};

export default LoggedIn;
