import { useState } from "react";
import ButtonControl from "../controls/ButtonControl";

import Box from "./Box";
import "./MoveArea.css";

const MoveArea = () => {
  const [showDirection, setShowDirection] = useState("");

  const onClickHandler = (event) => {
    setShowDirection(event.target.closest("button").id);
  };

  const resetDirectionHandler = () => {
    setShowDirection("");
  };

  return (
    <div className="move-area-container">
      <div className="move-area">
        <Box
          direction={showDirection}
          onResetDirection={resetDirectionHandler}
        />
      </div>
      <ButtonControl onClick={onClickHandler} />
    </div>
  );
};

export default MoveArea;
