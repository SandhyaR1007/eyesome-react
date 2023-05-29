import React from "react";
import PriceCard from "./PriceCard";
import { useCartContext, useProductsContext } from "../../contexts";
import { useNavigate } from "react-router";

const CartTotalCard = ({ cart }) => {
  const navigate = useNavigate();

  const { setisOrderPlaced } = useProductsContext();
  const { totalPriceOfCartProducts } = useCartContext();

  return (
    <section className="md:col-span-1 py-7 px-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
      <h1 className="text-xl">Price Details</h1>
      {cart.map((product) => (
        <PriceCard key={product._id} product={product} />
      ))}

      <hr />
      <div className="flex justify-between items-center">
        <p className=" text-gray-600">Total</p>
        <p className="text-2xl">₹ {totalPriceOfCartProducts}</p>
      </div>

      <div className="w-full py-2   flex gap-4 items-center">
        <button
          className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
          onClick={() => {
            setisOrderPlaced(true);
            setTimeout(() => {
              navigate("/checkout", {
                state: "cart",
              });
            }, 100);
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotalCard;
