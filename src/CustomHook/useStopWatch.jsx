import { useRef, useState } from "react";

const useStopWatch=()=>{
const [time, setTime] = useState(0);
const [ms,setMs]=useState(0);
  const curTime = useRef(null);
  const curMs = useRef(null);
  const startTimer = () => {
    if (!curTime.current) {
      curTime.current = setInterval(() => {
        setTime((time) => time + 1);
        setMs(0);
      }, 1000);
    }
    if (!curMs.current) {
      curMs.current = setInterval(() => {
        setMs((ms) => ms + 1);
      }, 10);
    }
  };
  const stopTimer = () => {
    clearInterval(curTime.current);
    curTime.current = null;
    clearInterval(curMs.current);
    curMs.current = null;
  };
  const resetTimer = () => {
    clearInterval(curTime.current);
    curTime.current = null;
    clearInterval(curMs.current);
    curMs.current = null;
    setTime(0);
    setMs(0);
  };
  return {
    time,ms,startTimer,stopTimer,resetTimer
  }
}
export default useStopWatch;