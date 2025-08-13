// 1. Short break timer -> 5 min
// 2. Long break timer -> 15-30 min
// 4. Auto switch when break timers complete
// 5. Improve button functionality upon timer completion - FINISH BEFORE MOVING ON
// 7. How should we indicate to the use what mode the timer is in?

"use client";
import React, { useState, useEffect, useRef } from "react";

export default function TimerCard() {
  const [time, setTime] = useState<number>(25 * 60);
  const [sessionCount, setSessionCount] = useState<number>(0);
  const [timerMode, setTimerMode] = useState<string>("pomo");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isRunning || intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      if (typeof intervalRef.current === "number") {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      if (timerMode === "pomo") {
        setSessionCount((prevCount) => prevCount + 1);

        if ((sessionCount + 1) % 4 === 0) handleTimerModeChange("long");
        else handleTimerModeChange("short");
      } else {
        handleTimerModeChange("pomo");
      }
    }
  }, [time]);

  const handleTimerModeChange = (timerMode: string) => {
    setIsRunning(false);
    setTimerMode(timerMode);

    if (timerMode === "pomo") setTime(25 * 60);
    else if (timerMode === "short") setTime(5 * 60);
    else if (timerMode === "long") setTime(15 * 60);
  };

  const handleStartStopClick = () => {
    setIsRunning(!isRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    handleTimerModeChange(timerMode);
  };

  return (
    <div className="p-5 flex flex-col col-span-1 h-96 gap-y-5 bg-gray-900 font-sans rounded-xl">
      <div className="flex flex-row justify-center">
        <h1 className="text-3xl">Pomodoro Timer</h1>
      </div>
      <div className="flex flex-row justify-center">
        <h1>Session Count: {sessionCount}</h1>
      </div>
      <div className="flex flex-row justify-center">
        <h1 className="text-7xl">
          {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
          {String(Math.floor(time % 60)).padStart(2, "0")}
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <button
          type="button"
          className="p-5 hover:text-zinc-950 cursor-pointer"
          onClick={() => handleTimerModeChange("pomo")}
        >
          POMODORO
        </button>
        <button
          type="button"
          className="p-5 hover:text-zinc-950 cursor-pointer"
          onClick={() => handleTimerModeChange("short")}
        >
          SHORT BREAK
        </button>
        <button
          type="button"
          className="p-5 hover:text-zinc-950 cursor-pointer"
          onClick={() => handleTimerModeChange("long")}
        >
          LONG BREAK
        </button>
      </div>
      <div className="flex flex-row justify-center">
        <button
          type="button"
          className="p-5 hover:text-zinc-950 cursor-pointer"
          onClick={handleStartStopClick}
        >
          {isRunning ? "STOP" : "START"}
        </button>
        <button
          type="button"
          className="p-5 hover:text-zinc-950 cursor-pointer"
          onClick={handleResetClick}
        >
          RESET
        </button>
      </div>
    </div>
  );
}
