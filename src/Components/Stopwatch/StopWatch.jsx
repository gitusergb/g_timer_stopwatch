import { useState } from "react";
import useStopWatch from "../../CustomHook/useStopWatch";
import styled from "styled-components";

const StopWatch = ({ active }) => {
  const { time,ms,startTimer,stopTimer,resetTimer}=useStopWatch();
  const [butToggel,setButToggel]=useState(true);
  const handelButToggel=()=>{
    if(butToggel){
      startTimer();
      setButToggel(false);
    }
    else{
      stopTimer();
      setButToggel(true);
    }
  }
  return (
    <div>
       
      {active && (
        <STO>
               {/* gb fw27_265 google timer and stopwatch */}
          <CONT className="cont">
            <p>{time}<span>S</span></p>
         
            <p>{ms}</p>
          </CONT>
          <hr />
          <div className="butStW">
          <button onClick={handelButToggel}>
              {butToggel ? "Start" : "Stop"}
            </button>
            <button onClick={resetTimer}>Reset</button>
          </ div>
        </STO>
      )}
    </div>
  );
};
export default StopWatch;

const STO=styled.div`
 /* border: 1px solid gray; */
 padding: 10px;
 

.butStW{
  margin-left: 50px;
  display: flex;
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
  margin: 10px 0;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  position: relative;
  padding: 0px 30px;


 p {
  /* border: 1px solid green; */
  background: transparent;
  color: white;
  height: 50px;
  width: 60px;
  border: 0px;
}
span{
  font-size: 20px;
}
  p:nth-child(1){
  font-size: 50px;
  position: absolute;
  left: 80px;
}
p:nth-child(2){
  font-size: 45px;
  padding-top: 20px;
  position: absolute;
  left: 160px;
}

`;