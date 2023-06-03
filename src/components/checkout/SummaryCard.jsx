import React from "react";
import { useCartContext, useProductsContext } from "../../contexts";
import PriceDetailsCard from "./PriceDetailsCard";
import { notify } from "../../utils/utils";

const SummaryCard = ({ setShowModal }) => {
  const { addressList, currentAddress } = useProductsContext();
  const { cart, totalPriceOfCartProducts, actualPriceOfCart } =
    useCartContext();
  const totalItems = cart.reduce((acc, { qty }) => acc + qty, 0);

  return (
    <section className="py-3 md:py-7 px-5 md:px-7 lg:px-12 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-5 w-full h-min">
      <h1 className="text-2xl font-bold">Order Summary</h1>

      {cart.map((item) => (
        <div
          className="flex flex-col gap-2 shadow-sm px-4 py-2 rounded-sm "
          key={item._id}
        >
          <div className="flex  items-center flex-wrap gap-2 w-full">
            <div className="flex flex-1 items-center gap-2">
              <div className=" bg-black/[0.075] h-16 w-16 rounded-md flex items-center">
                <img src={item.image} alt="" className="object-fit w-full" />
              </div>
              <div className="">
                <h2>{item.name}</h2>
                <span>₹{item.newPrice}</span>
                <span className="text-sm text-gray-500 line-through px-2">
                  ₹{item.price}
                </span>
              </div>
            </div>
            <div className="text-lg">x{item.qty}</div>
          </div>
        </div>
      ))}

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

      <div className="w-full py-2   flex gap-4 items-center">
        <button
          onClick={() => {
            if (
              addressList.length === 0 ||
              Object.keys(currentAddress).length === 0
            ) {
              notify("warn", "Please Select or Add an Address.");
            } else {
              setShowModal(true);
            }
          }}
          className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
        >
          Place Order
        </button>
      </div>
    </section>
  );
};

export default SummaryCard;
