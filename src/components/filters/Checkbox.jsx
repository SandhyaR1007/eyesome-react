const Checkbox = ({ data: { name, value }, index }) => {
  return (
    <label
      className={`p-2 rounded-md  shadow-sm text-center ${
        index
          ? "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
          : "bg-[--primary-text-color] text-white cursor-pointer"
      }`}
    >
      {name}
      <input type="checkbox" hidden name="category" value={value} />
    </label>
  );
};

export default Checkbox;
