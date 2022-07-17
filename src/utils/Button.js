import { useState } from "react";

import "./Button.css";

const Button = (props) => {
  const [moveBoxInterval, setMoveBoxInterval] = useState();

  const onMouseDownHandler = (event) => {
    setMoveBoxInterval(
      setInterval(() => {
        props.onSetShowDirection(event.target.closest("button").id);
      }, 100)
    );
  };

  const onMouseUpHandler = () => {
    clearInterval(moveBoxInterval);
  };

  return (
    <button
      id={props.id}
      onMouseDown={onMouseDownHandler}
      onMouseUp={onMouseUpHandler}
      className="utils-btn"
    >
      <span className="material-symbols-outlined button-arrow">
        arrow_drop_up
      </span>
    </button>
  );
};

export default Button;
