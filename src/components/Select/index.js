import "./style.css";

const Select = ({ value, label, options, hasEmpty = "", onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-select">
      <label htmlFor={label}>{label}</label>
      <select name={label} value={value} onChange={handleChange}>
        {hasEmpty && <option value={0}>Seleziona un valore</option>}
        {options.map((o, i) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
