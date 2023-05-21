const Checkbox = ({ data: { name, value }, index }) => {
  return (
    <label>
      <input
        className="accent-[--primary-text-color] me-2"
        type="checkbox"
        name="category"
        value={value}
      />
      {name}
    </label>
  );
};

export default Checkbox;
