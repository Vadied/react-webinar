import "./style.css";

const Select = ({ value, label, options, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  
  return (
    <div className="input-select">
      <label htmlFor={label}>{label}</label>
      <select name={label} value={value} onChange={handleChange}>
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
