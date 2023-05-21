import React from "react";
import { useProductsContext } from "../../contexts";

const InputRadio = ({ data, name }) => {
  const { applyFilters } = useProductsContext();
  return (
    <label>
      <input
        type="radio"
        className=""
        name={name}
        value={data}
        onChange={(e) => applyFilters(name, data)}
      />{" "}
      {data} Stars & above
    </label>
  );
};

export default InputRadio;
