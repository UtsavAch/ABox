import { useState } from "react";
import Button from "../utils/Button";
import CentralButton from "./CentralButton";
import "./ButtonControl.css";

const ButtonControl = (props) => {
  const [play, setPlay] = useState(false);

  const centralButtonClickHandler = (event) => {
    if (event.target.closest("button")) {
      setPlay((prevPlay) => !prevPlay);
    }
  };

  return (
    <div className="buttons-container">
      <Button id="left" onClick={props.onClick} />
      <Button id="right" onClick={props.onClick} />
      <Button id="up" onClick={props.onClick} />
      <Button id="down" onClick={props.onClick} />
      <CentralButton
        id="central"
        play={play}
        onClick={centralButtonClickHandler}
      />
    </div>
  );
};

export default ButtonControl;
