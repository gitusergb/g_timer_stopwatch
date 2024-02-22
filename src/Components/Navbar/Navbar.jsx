import React from "react";
import styled from "styled-components";
  

const Navbar = ({ active, stateHandler }) => {
  return (
    <div>
       
    
    <NAV className="nav">
      <div
        className={!active ? active : undefined}
        onClick={() => stateHandler(true)}
      >
        <img
           className="watch"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfd14oD4EIFjVxZGRRJyfXmr7HE-oYOxa1g&usqp=CAU"
          alt="sand timer"
        />
        <span>TIMER</span>
      </div>
      <div
        className={active ?active : undefined}
        onClick={() => stateHandler(false)}
      >
        <img
        className="watch"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RJxdW09dtBlyFaBQSUl7D5IgA0-mWhDIkw&usqp=CAU"
          alt="stopwatch"
        />
        <span>STOPWATCH</span>
      </div>
  
    </NAV>
    <hr />
    </div>
  );
};

export default Navbar;

const NAV = styled.div`
 display: flex;
  justify-content: space-around;
  height: 60px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  color: rgb(112, 108, 108);

  div {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid rgb(10, 137, 216);
  color: rgb(10, 137, 216);
}
.watch{
  width:40px;
  border-radius:50%;
}
`;