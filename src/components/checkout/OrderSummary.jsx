import React from "react";
import AddressCard from "../address/AddressCard";
import { useCartContext, useProductsContext } from "../../contexts";
import PriceDetailsCard from "./PriceDetailsCard";

const OrderSummary = () => {
  const { currentAddress } = useProductsContext();
  const { cart, totalPriceOfCartProducts, actualPriceOfCart } =
    useCartContext();
  const totalItems = cart.reduce((acc, { qty }) => acc + qty, 0);
  return (
    <div className="px-7  rounded-md shadow-sm bg-gray-50 flex flex-col gap-2 min-w-[25rem] w-full h-min">
      <h1 className="text-sm font-semibold text-gray-700 ms-4">Address</h1>
      <AddressCard address={currentAddress} showInput={false} />
      <hr />
      <PriceDetailsCard
        totalItems={totalItems}
        actualPriceOfCart={actualPriceOfCart}
        totalPriceOfCartProducts={totalPriceOfCartProducts}
      />
      <hr />
      <div className="flex justify-between items-center">
        <p className=" text-gray-600">Total</p>
        <p className="text-2xl">₹{totalPriceOfCartProducts}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
