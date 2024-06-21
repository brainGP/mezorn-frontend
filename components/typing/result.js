import { calcAccuracy, calcTypingSpeed } from "@/utils/typing";
import React from "react";

const Result = ({ totalInput, isCompleted, duration, userInput }) => {
  const res = [
    { label: "Time", value: `${duration}s` },
    { label: "WPM", value: calcTypingSpeed(duration, userInput) },
    { label: "Accuracy", value: calcAccuracy(totalInput, userInput) },
  ];

  return (
    isCompleted && (
      <div className="mt-6 text-lg text-center font-light">
        {res.map((row, index) => (
          <p key={index} className="text-white/60">
            {row.label}:{" "}
            <span className="font-bold text-red-500">{row.value}</span>
          </p>
        ))}
      </div>
    )
  );
};

export default Result;
