import { useState } from "react";
import ButtonControl from "../main-game-controls/ButtonControl";

import Box from "./Box";
import "./MoveArea.css";

const MoveArea = () => {
  const [startGame, setStartGame] = useState(false);
  const [showDirection, setShowDirection] = useState("");

  const resetDirectionHandler = () => {
    setShowDirection("");
  };

  return (
    <div className="move-area-container">
      <div className="move-area">
        <Box
          startGame={startGame}
          onStartGame={setStartGame}
          direction={showDirection}
          setDirection={setShowDirection}
          onResetDirection={resetDirectionHandler}
        />
      </div>
      <ButtonControl
        startGame={startGame}
        onStartGame={setStartGame}
        onSetShowDirection={setShowDirection}
      />
    </div>
  );
};

export default MoveArea;
