import React from "react";
import { useProductsContext } from "../../contexts";
import { useNavigate } from "react-router";

const CategoryCard = ({
  category: { categoryName, description, categoryImg },
}) => {
  const navigate = useNavigate();
  const { applyFilters } = useProductsContext();
  const clickHandler = () => {
    applyFilters("categories", [categoryName]);
    navigate("/products");
  };
  return (
    <section
      className="flex flex-col items-center   p-4 rounded-xl  bg-black/[.06] cursor-pointer gap-3 "
      onClick={clickHandler}
    >
      <h1 className="text-xl xs:text-base sm:text-xl font-bold capitalize">
        {categoryName}
      </h1>
      <p>{description}</p>
    </section>
  );
};

export default CategoryCard;
