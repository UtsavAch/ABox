import "./Button.css";

const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} className="utils-btn">
      <span className="material-symbols-outlined button-arrow">
        arrow_drop_up
      </span>
    </button>
  );
};

export default Button;
