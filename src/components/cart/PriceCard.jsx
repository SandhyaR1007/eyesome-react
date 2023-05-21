import React from "react";

const PriceCard = ({ product }) => {
  return (
    <div key={product._id} className=" flex  justify-between  ">
      <p className=" text-gray-600 flex-1">
        {product.name} ({product.qty})item
      </p>

      <p className="text-lg">₹ {product.qty * product.newPrice}</p>
    </div>
  );
};

export default PriceCard;
