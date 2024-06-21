import { wordsModes, modes } from "@/lib/typing";

const ModeSelector = ({
  mode,
  setMode,
  timeLimit,
  setTimeLimit,
  wordCount,
  setWordCount,
  resetTest,
  setRemainingTime,
}) => {
  const handleModeChange = (e) => {
    setMode(e.target.value);
    resetTest();
  };

  return (
    <div className="flex gap-2 items-center">
      <select
        value={mode}
        onChange={handleModeChange}
        className="bg-gray-800 text-white py-2 px-4 rounded"
      >
        {modes.map((mode, index) => (
          <option value={mode} key={index} className="uppercase">
            {mode}
          </option>
        ))}
      </select>
      {mode === "timed" ? (
        <TimedMode
          timeLimit={timeLimit}
          setTimeLimit={setTimeLimit}
          setRemainingTime={setRemainingTime}
        />
      ) : (
        <WordsMode
          wordCount={wordCount}
          setWordCount={setWordCount}
          resetTest={resetTest}
        />
      )}
    </div>
  );
};

export default ModeSelector;

const TimedMode = ({ timeLimit, setTimeLimit, setRemainingTime }) => {
  const handleTimeLimitChange = (e) => {
    const { value } = e.target;
    const newTimeLimit = parseInt(value);
    setTimeLimit(newTimeLimit);
    setRemainingTime(newTimeLimit);
  };

  return (
    <input
      type="number"
      value={timeLimit}
      onChange={handleTimeLimitChange}
      className="bg-gray-800 text-white py-2 px-4 rounded"
      min="10"
      max="300"
    />
  );
};

export const WordsMode = ({ wordCount, setWordCount, resetTest }) => {
  const handleWordCountChange = (count) => {
    setWordCount(count);
    resetTest();
  };
  return (
    <div className="flex gap-2">
      {wordsModes.map((count) => (
        <button
          key={count}
          onClick={() => handleWordCountChange(count)}
          className={`${
            wordCount === count
              ? "bg-red-500 text-white"
              : "bg-gray-800 text-white"
          } py-2 px-4 rounded`}
        >
          {count}
        </button>
      ))}
    </div>
  );
};
