import { useEffect, useRef, useState } from "react";

const UserInput = ({
  mode,
  userInput,
  setUserInput,
  paragraph,
  isCompleted,
  setIsCompleted,
  setDuration,
  setTotalInput,
}) => {
  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const [fromTop, setFromTop] = useState(20);
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("paste", handlePaste);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("paste", handlePaste);
      }
      clearInterval(timerRef.current);
    };
  }, [inputRef]);

  const handleTime = () => {
    setTime((prev) => prev + 1);
  };

  const handleTimer = () => {
    timerRef.current = setInterval(handleTime, 1000);
    return () => clearInterval(timerRef.current);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (!isStarted) {
      handleTimer();
      setIsStarted(true);
    }

    if (!isCompleted) {
      setTotalInput((prev) => prev + 1);
      setUserInput(value);
    }

    if (value.trim() === paragraph.trim()) {
      setDuration(time);
      setIsCompleted(true);
      clearInterval(timerRef.current);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    alert("Pasting is not allowed!");
  };

  const fromLeft = 18;
  const letterWidth = 14.5;

  const style = {
    left: `${fromLeft + letterWidth * userInput.split("").length}px`,
    top: `${fromTop}px`,
  };
  return (
    <div className="absolute w-full top-0">
      <div
        className="absolute h-8 w-1 rounded scale-x-75 bg-red-600 transition-all"
        style={style}
      />
      <textarea
        id="myInput"
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="opacity-0 w-full shrink-0 text-2xl  p-5"
        autoFocus
        disabled={setIsCompleted && mode === "timed"}
      />
    </div>
  );
};

export default UserInput;
