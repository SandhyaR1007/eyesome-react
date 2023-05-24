import React from "react";
import { useProductsContext } from "../../contexts";

const InputRange = () => {
  const {
    maxRange,
    applyFilters,
    filters: { priceRange },
  } = useProductsContext();
  return (
    <label>
      <input
        type="range"
        min="0"
        max={maxRange}
        step="200"
        name="priceRange"
        value={priceRange}
        className="w-full accent-[--primary-text-color] cursor-pointer"
        onChange={(e) => applyFilters(e.target.name, e.target.value)}
      />
      <div className="w-full flex justify-between p-0">
        <span>0</span>
        <span>{Math.floor(maxRange / 2)}</span>
        <span>{maxRange}</span>
      </div>
    </label>
  );
};

export default InputRange;
