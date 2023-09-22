import "./style.css";

const Input = ({ value, label = "", type = "text", onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="text-input">
      <label htmlFor={label}>{label}</label>
      <input name={label} value={value} type={type} onChange={handleChange} />
    </div>
  );
};

export default Input;
