import { useState, useRef } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);

  // const isStart = "Your code here";
  const active = useRef(null);
  const timerId = useRef(null);
  console.log(time);

  const startTimer = () => {
    if (timerId.current) return; // Prevent multiple intervals
    timerId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    console.log("active.current", active.current);
    active.current.disabled = true;
    console.log("start:", timerId.current); // ??? WHY 3
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null; // Reset to allow restart

    console.log("active.current", active.current);
    active.current.disabled = false;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};

export default useTimer;
