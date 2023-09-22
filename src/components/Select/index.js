const Select = ({ value, options, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      {options.map((o, i) => (
        <option key={i}>{o}</option>
      ))}
    </select>
  );
};

export default Select;
