import React, { useEffect, useState } from "react";
import formatTime from "../Utils/Clock";
import styles from "../Styles/Clock.module.scss"

function Clock() {
  const initialState = {
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let interval = setInterval(() => {
      let fecha = new Date();
      let hr = formatTime(fecha.getHours());
      let min = formatTime(fecha.getMinutes());
      let seg = formatTime(fecha.getSeconds());
      setState({
        hours: hr,
        minutes: min,
        seconds: seg,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className={styles.clock_container}>
        <h1>
          {state.hours} : {state.minutes} : {state.seconds}
        </h1>
      </div>
    </div>
  );
}

export default Clock;
