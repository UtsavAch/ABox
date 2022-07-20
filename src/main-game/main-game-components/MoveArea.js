import { useState, useEffect } from "react";
import ButtonControl from "../main-game-controls/ButtonControl";

import Box from "./Box";
import CountDown from "./CountDown";
import "./MoveArea.css";

const MoveArea = () => {
  const [startGame, setStartGame] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [showDirection, setShowDirection] = useState("");

  useEffect(() => {
    startGame && setIsCountingDown(true);
    !startGame && setIsCountingDown(false);
  }, [startGame]);

  const resetDirectionHandler = () => {
    setShowDirection("");
  };

  console.log("Is counting down", isCountingDown);
  console.log("Start Game", startGame);

  return (
    <div className="move-area-container">
      <div className="move-area">
        <Box
          startGame={startGame}
          onStartGame={setStartGame}
          isCountingDown={isCountingDown}
          direction={showDirection}
          setDirection={setShowDirection}
          onResetDirection={resetDirectionHandler}
        />
        {startGame && (
          <CountDown
            isCountingDown={isCountingDown}
            onIsCountingDown={setIsCountingDown}
          />
        )}
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
