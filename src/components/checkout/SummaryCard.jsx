import React from "react";
import { useCartContext } from "../../contexts";

const SummaryCard = () => {
  const { cart, totalPriceOfCartProducts, actualPriceOfCart } =
    useCartContext();

  const summaryData = [
    {
      label: "Subtotal",
      value: `₹${actualPriceOfCart}`,
    },
    {
      label: "Discount",
      value: `-₹${actualPriceOfCart - totalPriceOfCartProducts}`,
    },
    {
      label: "Delivery Charges",
      value: "Free",
    },
  ];

  const ItemsCard = ({ item }) => {
    return (
      <div className="flex flex-col gap-2 shadow-sm px-4 py-2 rounded-sm ">
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
    );
  };

  return (
    <section className="py-7 px-12 md:px-7 lg:px-12 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min">
      <h1 className="text-2xl font-bold">Order Summary</h1>

      {cart.map((item) => (
        <ItemsCard item={item} />
      ))}

      <hr />
      {summaryData.map(({ label, value }) => (
        <div key={label} className=" flex justify-between items-center p-0 ">
          <p className=" text-gray-600">{label}</p>
          <p className="text-lg">{value}</p>
        </div>
      ))}

      <hr />
      <div className="flex justify-between items-center">
        <p className=" text-gray-600">Total</p>
        <p className="text-2xl">₹{totalPriceOfCartProducts}</p>
      </div>

      <div className="w-full py-2   flex gap-4 items-center">
        <button className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base">
          Place Order
        </button>
      </div>
    </section>
  );
};

export default SummaryCard;
