import React from "react";
import { useProductsContext } from "../../contexts";

const SortBy = () => {
  const {
    applyFilters,
    filters: { sortBy },
  } = useProductsContext();
  return (
    <label>
      <select
        name="sortBy"
        value={sortBy}
        className="w-max py-1 px-2 rounded-md cursor-pointer shadow-md   hover:shadow-lg "
        onChange={(e) => applyFilters("sortBy", e.target.value)}
      >
        <option value="" defaultValue="" disabled>
          Sort By Price
        </option>
        <option value="low_to_high" className="">
          Low to High
        </option>
        <option value="high_to_low" className="">
          High to Low
        </option>
      </select>
    </label>
  );
};

export default SortBy;
