import "./style.css";

const Button = ({ type = "", onClick, isDisabled = false, children }) => {
  const disabled = (isDisabled && "disabled") || "";

  const handleClick = () => {
    if (disabled) return;

    onClick();
  };

  return (
    <div
      className={`button ${type} ${disabled}`}
      onClick={handleClick}
    >
      <div className="content center">{children}</div>
    </div>
  );
};

export default Button;
