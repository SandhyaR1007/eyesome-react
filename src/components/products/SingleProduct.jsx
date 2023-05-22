import { GiRoundStar } from "react-icons/gi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import {
  useAuthContext,
  useCartContext,
  useProductsContext,
  useWishlistContext,
} from "../../contexts";
import { useNavigate } from "react-router";

const SingleProduct = ({ product, fromWish }) => {
  const { isAuthenticated } = useAuthContext();
  const { isInCart } = useProductsContext();
  const { addProductToCart } = useCartContext();
  const { addProductToWishlist, deleteProductFromWishlist } =
    useWishlistContext();
  const navigate = useNavigate();
  let inCart;
  if (fromWish) {
    inCart = isInCart(product._id);
  }
  return (
    <div
      className="flex flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg"
    >
      <div
        className="flex items-center justify-center p-10 bg-black/[0.075] h-1/2"
        onClick={() => {
          navigate(`/product-details/${product._id}`);
        }}
      >
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3 flex flex-col justify-between gap-2 mt-2 h-1/2">
        <div>
          <div className=" flex justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-medium">{product.name}</span>
              <span className="flex items-center gap-1">
                <span>{product.rating}</span>

                <GiRoundStar className=" text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">Rating</span>
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-amber-600">₹{product.newPrice}</span>
              <span className="text-sm text-gray-600 line-through">
                {product.price}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{product.brand}</p>
        </div>
        <div className="w-full pt-2 border-t flex justify-between items-center">
          <button
            className={`border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md`}
            onClick={() => {
              if (!isAuthenticated) {
                navigate("/login");
              } else {
                if (!product?.inCart || inCart) {
                  addProductToCart(product);
                } else {
                  navigate("/cart");
                }
              }
            }}
          >
            {product?.inCart || inCart ? "Go to Cart" : "Add to Cart"}
          </button>
          <button
            onClick={() => {
              if (product?.inWish) {
                deleteProductFromWishlist(product._id);
              } else {
                addProductToWishlist(product);
              }
            }}
          >
            {product.inWish ? (
              <BsFillBookmarkHeartFill className="text-xl text-rose-600 hover:shadow-md transition" />
            ) : (
              <BsBookmarkHeart className="text-xl hover:text-rose-600 hover:shadow-md transition" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
