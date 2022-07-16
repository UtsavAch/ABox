const KeyboardControl = (fn) => {
  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (event.key === "ArrowDown") {
      fn("down");
    } else if (event.key === "ArrowUp") {
      fn("up");
    } else if (event.key === "ArrowLeft") {
      fn("left");
    } else if (event.key === "ArrowRight") {
      fn("right");
    } else {
      return;
    }
  });
};

export default KeyboardControl;
