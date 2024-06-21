"use client";
import { getParagraph } from "@/lib/apis";
import { shuffleText } from "@/utils/typing";
import { useState, useEffect } from "react";
import ModeSelector from "./typing/modeSelector";
import { modes, wordsModes } from "@/lib/typing";
import RemainingTime from "./typing/remainingTime";
import TextDisplay from "./typing/textDisplay";
import UserInput from "./typing/userInput";
import Result from "./typing/result";
import ResetButton from "./typing/resetButton";

const TypingTest = () => {
  const [mode, setMode] = useState(modes[0]);
  const [wordCount, setWordCount] = useState(wordsModes[0]);

  const [loading, setLoading] = useState(false);

  const [paragraph, setParagraph] = useState("");
  const [userInput, setUserInput] = useState("");

  const [duration, setDuration] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [timeLimit, setTimeLimit] = useState(60);
  const [remainingTime, setRemainingTime] = useState(timeLimit);

  const [totalInput, setTotalInput] = useState(0);

  const fetchParagraph = async () => {
    setLoading(true);
    try {
      const res = await getParagraph();
      const shuffledText = shuffleText(res, wordCount);
      setParagraph(shuffledText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParagraph();
  }, [wordCount]);

  const resetTest = async () => {
    await fetchParagraph();
    setUserInput("");
    setIsCompleted(false);
    setDuration(0);
    setRemainingTime(timeLimit);
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col gap-8 items-center justify-center p-4 ">
      <h2 className="text-4xl font-bold">Typing Test</h2>
      <ModeSelector
        mode={mode}
        setMode={setMode}
        timeLimit={timeLimit}
        setTimeLimit={setTimeLimit}
        wordCount={wordCount}
        setWordCount={setWordCount}
        resetTest={resetTest}
        setRemainingTime={setRemainingTime}
      />

      <RemainingTime mode={mode} remainingTime={remainingTime} />
      <div className="w-full relative">
        <TextDisplay
          userInput={userInput}
          paragraph={paragraph}
          loading={loading}
        />

        <UserInput
          mode={mode}
          userInput={userInput}
          setUserInput={setUserInput}
          paragraph={paragraph}
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
          setDuration={setDuration}
          setTotalInput={setTotalInput}
          setRemainingTime={setRemainingTime}
        />
      </div>
      <ResetButton resetTest={resetTest} />

      <Result
        totalInput={totalInput}
        isCompleted={isCompleted}
        duration={duration}
        userInput={userInput}
      />
    </div>
  );
};

export default TypingTest;
