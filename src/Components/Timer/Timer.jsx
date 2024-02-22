import { useEffect, useState } from "react";
import useTimer from "../../CustomHook/useTimer";
import StrConverter from "./StrConverter";
import TimeConverter from "./TimeConverter";
import styled from "styled-components";


const init = { hh: "00", mm: "00", ss: "00" };
const Timer = ({ active }) => {
  const { time, startTimer, stopTimer, resetTimer, timeHandler } = useTimer();
  const [timeStr, setTimeStr] = useState(init);
  const [inputStr, setInputStr] = useState(init);
  const [toggel, setToggel] = useState(true);
  const [butToggel, setButToggel] = useState(true);
  useEffect(() => {
    timeHandler(StrConverter(timeStr));
  }, [timeStr]);
  useEffect(() => {
    setInputStr(TimeConverter(time));
    if (time === 0) {
      butToggelHandler();
    }
  }, [time]);

  const handleToggel = () => {
    if (time !== 0) {
      setToggel(false);
      startTimer();
      setButToggel(false);
    }
  };
  const reverseToggel = () => {
    setToggel(true);
    stopTimer();
  };
  const resetToggel = () => {
    setToggel(true);
    setButToggel(true);
    resetTimer();
    timeHandler(StrConverter(timeStr));
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTimeStr({ ...timeStr, [name]: value });
  };
  const butToggelHandler = () => {
    setButToggel(true);
    stopTimer();
  };

  return (
    <div>    {/* gb fw27_265 google timer and stopwatch */}
      {!active && (
        <TIM>
          <CONT className="cont">
            <input
              onClick={reverseToggel}
               className="inputBox"
              type="tel"
              maxLength="2"
              minLength="0"
              value={toggel ? timeStr.hh : inputStr.hh}
              name="hh"
              onChange={changeHandler}
            />
            <span style={{ fontSize: "20px" }}>h</span>
            <input
              onClick={reverseToggel}
               className="inputBox"
              type="tel"
              maxLength="2"
              minLength="0"
              value={toggel ? timeStr.mm : inputStr.mm}
              name="mm"
              onChange={changeHandler}
            />
            <span style={{ fontSize: "20px" }}>m</span>
            <input
              onClick={reverseToggel}
              className="inputBox"
              type="tel"
              maxLength="2"
              minLength="0"
              value={toggel ? timeStr.ss : inputStr.ss}
              name="ss"
              onChange={changeHandler}
            />
            <span style={{ fontSize: "20px" }}>s</span>
          </CONT>
          <hr />
          <div className="but">
            <button onClick={butToggel ? handleToggel : butToggelHandler}>
              {butToggel ? "Start" : "Stop"}
            </button>
            <button onClick={resetToggel}>Reset</button>
          </div>
        </TIM>
      )}
    </div>
   
  );
};
export default Timer;
const TIM=styled.div`
 /* border: 1px solid gray; */
 padding: 10px;
  .but {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 10px 0px 10px;
}
button {
  /* border: 0.5px solid grey; */
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  color: grey;
  background-color: #0b0d0e;
  padding: 10px 25px;
  font-weight: 500;
}
button:hover {
  border: 0.5px solid rgb(10, 137, 216);
  background-color: rgb(10, 137, 216);
  color: #fff;
}


`
const CONT  = styled.div`
 padding: 0px 30px;
 
 /* border: 1px solid gray; */
 height: 70px;
 .inputBox {
  background: transparent;
  color: white;
  font-size: 40px;
  height: 50px;
  width: 60px;
  border: 0px;
}

`;