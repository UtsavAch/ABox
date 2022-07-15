import { useRef, useState, useEffect } from "react";
import "./Box.css";

const Box = (props) => {
  const [position, setPosition] = useState({ horizontal: 0, vertical: 0 });
  const boxRef = useRef();
  const boxSize = boxRef.current && boxRef.current.clientWidth;
  const moveAreaSize = boxRef.current && boxRef.current.parentNode.clientWidth;

  useEffect(() => {
    if (props.direction === "left") {
      setPosition((prevPosition) => {
        return {
          ...prevPosition,
          horizontal:
            prevPosition.horizontal <= 0
              ? prevPosition.horizontal
              : prevPosition.horizontal - 1,
        };
      });
    }
    if (props.direction === "right") {
      setPosition((prevPosition) => {
        return {
          ...prevPosition,
          horizontal:
            prevPosition.horizontal >= moveAreaSize / boxSize - 1
              ? prevPosition.horizontal
              : prevPosition.horizontal + 1,
        };
      });
    }
    if (props.direction === "up") {
      setPosition((prevPosition) => {
        return {
          ...prevPosition,
          vertical:
            prevPosition.vertical <= 0
              ? prevPosition.vertical
              : prevPosition.vertical - 1,
        };
      });
    }
    if (props.direction === "down") {
      setPosition((prevPosition) => {
        return {
          ...prevPosition,
          vertical:
            prevPosition.vertical >= moveAreaSize / boxSize - 1
              ? prevPosition.vertical
              : prevPosition.vertical + 1,
        };
      });
    }
    props.onResetDirection();
  }, [props, boxSize, moveAreaSize]);

  boxRef.current &&
    position.horizontal >= 0 &&
    (position.horizontal + 1) * boxSize <= moveAreaSize &&
    (boxRef.current.style.left = `${position.horizontal * boxSize}px`);

  boxRef.current &&
    position.vertical >= 0 &&
    (position.vertical + 1) * boxSize <= moveAreaSize &&
    (boxRef.current.style.top = `${position.vertical * boxSize}px`);

  return <div ref={boxRef} className="box"></div>;
};

export default Box;
