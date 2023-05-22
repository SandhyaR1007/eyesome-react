import React from "react";

import { useProductsContext } from "../contexts";
import { CartItemCard } from "../components";
import CartTotalCard from "../components/cart/CartTotalCard";

const Cart = () => {
  const { cart } = useProductsContext();

  return (
    <div className="">
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="grid md:grid-cols-3 gap-5">
        <main className="md:col-span-2">
          {cart.map((product) => (
            <CartItemCard product={product} />
          ))}
        </main>
        <CartTotalCard cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
