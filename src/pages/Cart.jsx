import React from "react";
import emptyBag from "../assets/empty-shopping-bag.png";
import { useCartContext } from "../contexts";
import { CartItemCard } from "../components";
import CartTotalCard from "../components/cart/CartTotalCard";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="py-2 ">
      {cart.length > 0 && (
        <h1 className="text-2xl font-bold p-3 ">Bag({cart.length})</h1>
      )}
      {cart.length ? (
        <div className="md:grid md:grid-cols-3 gap-5">
          <main className="md:col-span-2">
            {cart.map((product) => (
              <CartItemCard product={product} />
            ))}
          </main>
          <CartTotalCard cart={cart} />
        </div>
      ) : (
        <div className="h-[60vh] w-full flex flex-col items-center justify-center  gap-3 ">
          <img
            src={emptyBag}
            alt="empty bag"
            className="h-36 -rotate-12 mt-5 drop-shadow-lg"
          />
          <div className="text-center">
            <h2 className="text-2xl font-bold">Hey, it feels so light!</h2>
            <p className="text-sm text-gray-400">
              There's nothing in your bag. Let's add some items.
            </p>
          </div>

          <button
            className="btn-rounded-secondary text-sm mt-5"
            onClick={() => navigate("/products")}
          >
            Explore
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
