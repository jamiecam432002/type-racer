import React from "react";
import Button from "./Button";

const Typeracer = ({
  newWord,
  inputValue,
  setInputValue,
  disabled,
  time,
  animation,
  handleInput,
  handleStart,
}) => {
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          onKeyPress={(e) => handleInput(e)}
          disabled={disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default Typeracer;
