// tests/Timer.js

import React, { useEffect, useState } from "react";

function Timer({ duration, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft, onTimeUp]);

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const rem = sec % 60;
    return `${min.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return <div className="timer">⏳ Time Left: {formatTime(secondsLeft)}</div>;
}

export default Timer;
