import React from "react";
import { useProductsContext } from "../../contexts";

const InputRadio = ({ data, name }) => {
  const { applyFilters } = useProductsContext();
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        className="accent-current cursor-pointer"
        name={name}
        value={data}
        onChange={(e) => applyFilters(name, data)}
      />{" "}
      {data} Stars & above
    </label>
  );
};

export default InputRadio;
