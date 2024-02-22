import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import StopWatch from "./Components/Stopwatch/StopWatch";
import Timer from "./Components/Timer/Timer";
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const stateHandler = (val) => {
    val ? setActive(false) : setActive(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://singing-digital-clock.netlify.app/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUbe5RQzV35g3v9QK60PZ92HJzn6ethX35Q&usqp=CAU" className="App-logo" alt="logo" />
         </a>
      </header>
        {/* gb fw27_265 google timer and stopwatch */}
      <Navbar active={active} stateHandler={stateHandler} />
      <div className="cont">
        <Timer active={active} />
        <StopWatch active={active} />
      </div>
      <hr />
    </div>
  );
}

export default App;
