import "./CentralButton.css";

const CentralButton = (props) => {
  return (
    <button id={props.id} className="central-button" onClick={props.onClick}>
      {props.play ? (
        <span className="material-symbols-outlined central-button-icon">
          pause_circle
        </span>
      ) : (
        <span className="material-symbols-outlined central-button-icon">
          play_circle
        </span>
      )}
    </button>
  );
};

export default CentralButton;
