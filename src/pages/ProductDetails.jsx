import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";

import {
  useAuthContext,
  useCartContext,
  useProductsContext,
  useWishlistContext,
} from "../contexts";
import { getProductByIdService } from "../api/apiServices";
import { StarRating } from "../components";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { token } = useAuthContext();
  const { getProductById, allProducts } = useProductsContext();
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist, deleteProductFromWishlist } =
    useWishlistContext();
  const [loading, setLoading] = useState(false);
  const product = getProductById(productId);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await getProductByIdService(productId);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [allProducts]);

  return (
    <div className="md:min-h-[80vh] flex justify-center items-center py-3">
      <main className="flex md:flex-row flex-col gap-2 ">
        <section className="relative p-10 bg-black/[0.075] max-h-screen flex items-center rounded-lg">
          <img src={product?.image} alt="" className="w-full " />
        </section>

        <section className="p-7 px-10 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <p className=" text-gray-600 text-lg">{product?.description}</p>
            <div className="flex items-center gap-1">
              <StarRating />

              <span className="text-xs text-gray-400">
                ({product?.rating}) Rating
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2  ">
            <h2 className="  text-lg">About Product</h2>
            <ul>
              <li>
                <span className="text-gray-500 text-sm">Brand: </span>
                {product?.brand}
              </li>
              <li>
                <span className="text-gray-500 text-sm">Category: </span>
                {product?.category}
              </li>
              <li>
                <span className="text-gray-500 text-sm">Gender: </span>
                {product?.gender}
              </li>
              <li>
                <span className="text-gray-500">Heavy: </span>
                {product?.weight}
              </li>
            </ul>
          </div>

          <div className="flex gap-2 items-center">
            Price:
            <span className="ms-1 text-2xl text-amber-600">
              ₹{product?.newPrice}
            </span>
            <span className="text-sm text-gray-600 line-through">
              ₹{product?.price}
            </span>
          </div>

          <div className="w-full py-2   flex gap-4 items-center flex-wrap">
            <button
              className="btn-rounded-secondary flex items-center gap-2 md:text-sm lg:text-base"
              onClick={() => {
                if (!token) {
                  navigate("/login");
                } else {
                  if (!product?.inCart) {
                    addProductToCart(product);
                  } else {
                    navigate("/cart");
                  }
                }
              }}
            >
              <HiOutlineShoppingBag />{" "}
              {product?.inCart ? "Go to Bag" : "Add to Bag"}
            </button>

            <button
              className="btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base"
              onClick={() => {
                if (product?.inWish) {
                  deleteProductFromWishlist(product._id);
                } else {
                  addProductToWishlist(product);
                }
              }}
            >
              {product?.inWish ? (
                <>
                  <BsFillBookmarkHeartFill />
                  <span>Remove from Wishlist</span>
                </>
              ) : (
                <>
                  {" "}
                  <BsBookmarkHeart /> <span>Wishlist Item</span>
                </>
              )}{" "}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;
