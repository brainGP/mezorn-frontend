import React from "react";

const RemainingTime = ({ mode, remainingTime }) => {
  {
    mode === "timed" && (
      <div className="text-lg font-semibold mb-4">
        Time Remaining: {remainingTime} seconds
      </div>
    );
  }
};

export default RemainingTime;
