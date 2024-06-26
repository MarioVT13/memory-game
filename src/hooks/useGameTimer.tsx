import { useState, useEffect } from "react";

const formatTime = (num: number) => num.toString().padStart(2, "0");

const useGameTimer = (activeCardsLength: number, matchedIdsLength: number) => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    // Logic for tracking time of the game session
    if (matchedIdsLength * 2 === activeCardsLength && startTime) {
      const endTime = new Date();
      const elapsedTime = Math.floor(
        (endTime.getTime() - startTime.getTime()) / 1000
      ); // seconds
      const minutes = formatTime(Math.floor(elapsedTime / 60));
      const seconds = formatTime(elapsedTime % 60);
      setTimeElapsed(`${minutes}:${seconds}`);
    }
  }, [matchedIdsLength, activeCardsLength, startTime]);

  return { startTime, setStartTime, timeElapsed };
};

export default useGameTimer;
