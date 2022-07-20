import React, { useState, useEffect } from "react";
import "./CountDown.css";

const CountDown = (props) => {
  const [countDown, setCountDown] = useState(3);
  // const [showCountDown, setShowCountDown] = useState(true);

  useEffect(() => {
    let countDownInterval = setInterval(() => {
      if (countDown > 1) {
        setCountDown((prevCount) => prevCount - 1);
      } else if (countDown === 1) {
        setCountDown("Go!");
      } else {
        props.onIsCountingDown(false);
        clearInterval(countDownInterval);
      }
    }, 900);
    return () => {
      clearInterval(countDownInterval);
    };
  }, [countDown, props]);

  return (
    <React.Fragment>
      {props.isCountingDown && <div className="countdown">{countDown}</div>}
    </React.Fragment>
  );
};

export default CountDown;
