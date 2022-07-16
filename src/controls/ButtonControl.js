import React from "react";
import Button from "../utils/Button";
import CentralButton from "./CentralButton";
import "./ButtonControl.css";

const ButtonControl = (props) => {
  const centralButtonClickHandler = (event) => {
    if (event.target.closest("button")) {
      props.onStartGame((prevState) => !prevState);
    }
  };

  return (
    <div className="buttons-container">
      {props.startGame && (
        <React.Fragment>
          <Button id="left" onClick={props.onClick} />
          <Button id="right" onClick={props.onClick} />
          <Button id="up" onClick={props.onClick} />
          <Button id="down" onClick={props.onClick} />
        </React.Fragment>
      )}
      <CentralButton
        id="central"
        startGame={props.startGame}
        onClick={centralButtonClickHandler}
      />
    </div>
  );
};

export default ButtonControl;
