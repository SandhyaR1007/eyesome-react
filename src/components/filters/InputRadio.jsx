import React from "react";

const InputRadio = ({ data, name }) => {
  return (
    <label>
      <input type="radio" className="" name={name} /> {data} Stars & above
    </label>
  );
};

export default InputRadio;
