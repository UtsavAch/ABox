import { useState, useEffect } from "react";
import "./CountDown.css";

const CountDown = (props) => {
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    let countDownInterval = setInterval(() => {
      if (countDown > 1) {
        setCountDown((prevCount) => prevCount - 1);
      } else {
        setCountDown("Go!");
        clearInterval(countDownInterval);
      }
    }, 900);
    return () => {
      clearInterval(countDownInterval);
    };
  }, [countDown]);

  return <div className="countdown">{countDown}</div>;
};

export default CountDown;
