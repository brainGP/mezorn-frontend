import React from "react";

const ResetButton = ({ resetTest }) => {
  return (
    <button onClick={resetTest} className="bg-red-500 py-2 px-4 rounded">
      Reset
    </button>
  );
};

export default ResetButton;
