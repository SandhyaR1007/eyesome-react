import React from "react";
const InputRadioType2 = ({ data, selected }) => {
  return (
    <label
      className={`p-2 rounded-md  shadow-sm text-center ${
        selected === data
          ? "bg-[--primary-text-color] text-white "
          : "bg-black/[0.1] hover:bg-[--primary-text-color] hover:text-white"
      } cursor-pointer`}
    >
      {data}
      <input type="radio" name="category" value={data} className="invisible" />
    </label>
  );
};

export default InputRadioType2;
