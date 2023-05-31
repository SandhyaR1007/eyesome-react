import React from "react";
import SingleProduct from "../components/products/SingleProduct";
import { useWishlistContext } from "../contexts";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();

  return (
    <div>
      <h1 className="text-2xl py-6 font-semibold text-gray-800">Wishlist</h1>
      {wishlist.length ? (
        <main className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {wishlist.map((glass) => (
            <SingleProduct key={glass.id} product={glass} fromWish={true} />
          ))}
        </main>
      ) : (
        <div className="h-[60vh] w-full flex items-center justify-center font-sans text-4xl md:text-6xl font-semibold uppercase tracking-wide text-gray-300">
          Nothing to Show!
        </div>
      )}
    </div>
  );
};

export default Wishlist;
