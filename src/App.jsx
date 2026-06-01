import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setrunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 10);
    }

    return () =>  clearInterval(interval);
  }, [running]);

  return (
    <>
    {/* <div style={{
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems  : "center",
      height : "100vh"
    }}> */}
  
    <div>
      <h1>Stopwatch 01</h1>
    <span>{("0" + Math.floor((time /  60000 ) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time /  1000 ) % 60)).slice(-2)}:</span>
    <span>{("0" + ((time / 10 ) % 100)).slice(-2)}</span>
    </div>
    <div>
      <button onClick={() => {setrunning(true)}}>Start</button>
      <button onClick={() => {setrunning(false)}}>Stop</button>
      <button onClick={() => {setTime(0)}}>Reset</button>
    </div>

    {/* </div> */}
    </>
  )
}

export default App;