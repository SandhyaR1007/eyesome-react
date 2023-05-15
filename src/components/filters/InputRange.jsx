import React from "react";

const InputRange = () => {
  return (
    <label>
      <input
        type="range"
        min="100"
        max="10000"
        className="w-full accent-[--primary-text-color] cursor-pointer"
      />
    </label>
  );
};

export default InputRange;
