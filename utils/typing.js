export const shuffleText = (text, wordCount) => {
  const shuffledData = text.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, wordCount).join(" ");
};

export const calcTypingSpeed = (duration, userInput) => {
  const wordsTyped = userInput.split(" ").length;
  return ((wordsTyped / duration) * 60).toFixed(2);
};

export const calcAccuracy = (totalInput, userInput) => {
  const userInputLength = userInput.split("").length;
  return `${((userInputLength / totalInput) * 100).toFixed(2)}%`;
};
