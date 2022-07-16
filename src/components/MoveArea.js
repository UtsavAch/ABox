import { useState } from "react";
import ButtonControl from "../controls/ButtonControl";

import Box from "./Box";
import "./MoveArea.css";

const MoveArea = () => {
  const [startGame, setStartGame] = useState(false);
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
          startGame={startGame}
          direction={showDirection}
          setDirection={setShowDirection}
          onResetDirection={resetDirectionHandler}
        />
      </div>
      <ButtonControl
        onClick={onClickHandler}
        startGame={startGame}
        onStartGame={setStartGame}
      />
    </div>
  );
};

export default MoveArea;
