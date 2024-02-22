import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const curTime = useRef(null);
  const alarmSound = useRef(new Audio("/alm.wav"));

  const startTimer = () => {
    if (!curTime.current && time !==0) {
      curTime.current = setInterval(() => {
        setTime((prevTime)=>{
          const newTime = prevTime - 1;
          if (newTime === 0) {
            alarmSound.current.play();
          }
          return newTime;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    if (time === 1) {
      return () =>
      {
        clearInterval(curTime.current);
        curTime.current = null;
        alarmSound.current.pause(); // Stop the alarm sound
        alarmSound.current.currentTime = 0; // Reset the sound to the beginning
      };
    }
  }, [time]);


  const stopTimer = () => {
    clearInterval(curTime.current);
    curTime.current = null;
    alarmSound.current.pause(); // Stop the alarm sound
    alarmSound.current.currentTime = 0; // Reset the sound to the beginning
  };
  const resetTimer = () => {
    clearInterval(curTime.current);
    curTime.current = null;
    // setTime(time);
    setTime(time);
    alarmSound.current.pause(); // Stop the alarm sound
    alarmSound.current.currentTime = 0; // Reset the sound to the beginning
  };

  const timeHandler = (t) => {
    setTime(t);
  };
  return { time, startTimer, stopTimer, resetTimer, timeHandler };
};
export default useTimer;