import React from "react";

const TextDisplay = ({ loading, userInput, paragraph }) => {
  const HighlightedText = () => {
    const inputChars = userInput.split("");

    return paragraph.split("").map((char, index) => {
      let color = "";
      if (index < inputChars.length) {
        if (char === inputChars[index]) {
          color = "text-green-500";
        } else {
          color = "text-red-500";
        }
      }

      return (
        <span key={index} className={`${color}`}>
          {char}
        </span>
      );
    });
  };

  const focus = () => {
    document.getElementById("myInput").focus();
  };
  return (
    <div
      className="bg-gray-800 w-full text-2xl rounded-lg p-5 text-white/40"
      id="myText"
      onClick={focus}
    >
      {loading ? "loading" : <HighlightedText />}
    </div>
  );
};

export default TextDisplay;
