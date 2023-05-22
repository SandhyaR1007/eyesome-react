import React from "react";
import SingleProduct from "../components/products/SingleProduct";
import { useWishlistContext } from "../contexts";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();

  return (
    <div>
      <h1 className="text-3xl py-6 font-semibold">My Wishlist</h1>
      <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {wishlist.map((glass) => (
          <SingleProduct key={glass.id} product={glass} fromWish={true} />
        ))}
      </main>
    </div>
  );
};

export default Wishlist;
