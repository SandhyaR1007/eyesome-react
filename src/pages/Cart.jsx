import React from "react";

import { useCartContext } from "../contexts";
import { CartItemCard } from "../components";
import CartTotalCard from "../components/cart/CartTotalCard";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="">
      <h1 className="text-3xl font-bold">Cart({cart.length})</h1>
      {cart.length ? (
        <div className="grid md:grid-cols-3 gap-5">
          <main className="md:col-span-2">
            {cart.map((product) => (
              <CartItemCard product={product} />
            ))}
          </main>
          <CartTotalCard cart={cart} />
        </div>
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center">
          Cart is Empty
        </div>
      )}
    </div>
  );
};

export default Cart;
